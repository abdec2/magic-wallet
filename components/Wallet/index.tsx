import { useState, useCallback, useEffect } from "react";
import useETHBalance from "../../hooks/useETHBalance";
import useERC20Balances from "../../hooks/useERC20Balances";
import { useLogout, useUser } from "../../context/UserContext";
import { formatETH, formatERC20 } from "../../utils/format";
import Send from "../Send";
import Receive from "../Receive";
import CopyUserAddress from "../CopyUserAddress/CopyUserAddress";

import styles from "./Wallet.module.scss";
import { Button, Image } from "react-bootstrap";

const Wallet = (): JSX.Element | null => {
    const [send, setSend] = useState(false);
    const [receive, setReceive] = useState(false);
    const user = useUser();
    const logout = useLogout();

    const [ethBalance, reloadEth] = useETHBalance();
    const [balances, fetchUserErc20] = useERC20Balances();

    /** Reloader function  */
    const reloader = useCallback(() => {
        reloadEth();
        fetchUserErc20();
    }, [reloadEth, fetchUserErc20]);

    /** Reload these every 10 sec */
    useEffect(() => {
        const timeout = setTimeout(() => reloader(), 10000);
        return () => clearTimeout(timeout);
    }, [reloader]);

    if (!user) {
        return null;
    }

    if (send) {
        return <Send goBackToWallet={() => setSend(false)} />;
    }

    if (receive) {
        return <Receive goBackToWallet={() => setReceive(false)} />;
    }

    return (
        <section className={styles.wallet}>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <div className="emailForm__text p-3">
                    <span className="text-primary">NordicPay</span>
                </div>

                <div className="emailForm__logo mb-3">
                    <Image  src={'/images/logo.webp'} style={{border: 'none'}} thumbnail />
                </div>
            </div>
            <div className={styles.balance}>
                <span>Your Balance</span>
                <p className={styles.totalBalance}>
                    {formatETH(ethBalance)} ETH
                </p>

                <span>Your Address</span>
                <CopyUserAddress address={user.address} color="blue" />
            </div>

            <div className={styles.main}>
                <button onClick={reloader} className={styles.reloadBtn}>
                    Reload Quantities
                </button>
                <div className={styles.quantity}>
                    {balances.map((token) => (
                        <div key={token.symbol}>
                            {token.balance.gt(0) && (
                                <div className={styles.quantity__item}>
                                    <img
                                        alt={`${token.name} Logo`}
                                        src={token.logoURI}
                                    />
                                    <div>
                                        <span>
                                            {formatERC20(
                                                token.balance,
                                                token.decimals,
                                            )}{" "}
                                            {token.symbol}
                                        </span>
                                        {/* <small>$150 USD</small> */}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-between p-3 mb-3'>
                <a href='https://crypto.link.com?ref=lb' target='_blank' className='btn btn-light'>Buy</a>
                <button className='btn btn-light' onClick={() => setSend(true)}>Send</button>
                <button className='btn btn-light' onClick={() => setReceive(true)}>Receive</button>
            </div>
            <div className={styles.logoutContainer}>
                <Button variant="primary" type="submit" className="w-100 rounded-pill" onClick={logout}>Logout</Button>
            </div>
        </section>
    );
};

export default Wallet;
