import { BigNumber, utils } from "ethers";
import { GasPrices, GasSpeed } from "../interfaces/gas";

/**
 * Retrieves the gas prices from EthGasStation
 * See https://docs.ethgasstation.info/gas-price
 */
export const getGasPrices = async (): Promise<GasPrices> => {
    const res = await fetch(`${'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey='+process.env.NEXT_PUBLIC_ETHERSCAN_KEY}`);
    const costs: any = await res.json();

    return costs?.result;
};

export const getGasPrice = async (speed: GasSpeed): Promise<BigNumber> => {
    const prices = await getGasPrices();
    return utils.parseUnits(String(prices[speed]), "gwei");
};

export const getFastGasPrice = async (): Promise<BigNumber> =>
    getGasPrice(GasSpeed.fast);
