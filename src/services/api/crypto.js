import {apiCrypto} from ".";

export const getCoins = () => apiCrypto.get('?command=returnTicker');

export default getCoins;