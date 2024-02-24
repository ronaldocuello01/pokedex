import { POKE_API_HOST } from "../utils/constants";

export const getPokemonApi = async (nextUrl) => {

    try {
        const url = `${POKE_API_HOST}/pokemon?limit=20&offset=0`;
        const response = await fetch(nextUrl ? nextUrl : url).then(response => response.json());
        return response;
    } catch (err) {
        throw err;
    }

}


export const getPokemonDetailsApi = async (url) => {
    try {
        const response = await fetch(url).then(response => response.json());
        return response;
    } catch (err) {
        throw err;
    }
}


export const getPokemonDetailsByIdApi = async (id) => {
    try {
        const url = `${POKE_API_HOST}pokemon/${id}`;
        const response = await fetch(url).then(response => response.json());
        return response;
    } catch (err) {
        throw err;
    }
}