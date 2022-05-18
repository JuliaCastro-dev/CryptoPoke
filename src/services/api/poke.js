import {apiPoke} from ".";

export const getPokemon = (userName) => apiPoke.get(`pokemon/${userName}`);

export default {
    getPokemon
};