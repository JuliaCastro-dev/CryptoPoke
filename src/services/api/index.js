import axios from 'axios'

const apiPoke = axios.create({ baseURL:'https://pokeapi.co/api/v2/pokemon/',   headers: { Accept: "application/json" },});

export const apiCrypto = axios.create({ baseURL:'https://poloniex.com/public',  headers: { Accept: "application/json" },});



export default {
apiCrypto, 
apiPoke
};