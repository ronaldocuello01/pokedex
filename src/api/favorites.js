import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_POKEMON_STORAGE_NAME } from "../utils/constants";

const getFavoritePokemonsApi = async () => {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_POKEMON_STORAGE_NAME);
        return JSON.parse( response || '[]' );
    } catch (err) {
        throw err;
    }
}

const addFavoritePokemonApi = async (id) => {
    try {
        const favorites = await getFavoritePokemonsApi();
        favorites.push(id);
        await AsyncStorage.setItem(FAVORITE_POKEMON_STORAGE_NAME, JSON.stringify(favorites));
    } catch (err) {
        throw err;
    }
}


const isPokemonFavoriteApi = async (id) => {
    try {
        const response = await getFavoritePokemonsApi();
        return response.includes(id)
    } catch (err) {
        throw err;
    }
}

const removeFavoritePokemonApi = async (id) => {
    try {
        const favorites = await getFavoritePokemonsApi();
        const newFavorites = favorites.filter( fav => fav != id );
        await AsyncStorage.setItem(FAVORITE_POKEMON_STORAGE_NAME, JSON.stringify(newFavorites));
    } catch (err) {
        throw err;
    }
}

export { addFavoritePokemonApi, getFavoritePokemonsApi, isPokemonFavoriteApi, removeFavoritePokemonApi };