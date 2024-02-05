import Head from "next/head";
import { useUser } from "../context/UserContext";
import Signup from "../components/Signup";
import Wallet from "../components/Wallet";
import MenuBar from "../components/MenuBar/MenuBar";
import Hero from "../components/MenuBar/Hero";
import Joinus from "../components/MenuBar/Joinus";
import Subscribe from "../components/MenuBar/Subscribe";
import FooterEle from "../components/MenuBar/FooterEle";


const Home = (): JSX.Element => {
    const user = useUser();

    return (
        <div className="">
            <Head>
                <title>NordicPay</title>
                <link rel="icon" href="/icon.png" />
            </Head>
            <MenuBar />
            <Hero />
            <div className="py-5">
                {!user && <Signup />}
                {user && <Wallet />}
            </div>
            <Joinus />
            <Subscribe />
            <FooterEle />
        </div>
    );
};

export default Home;
