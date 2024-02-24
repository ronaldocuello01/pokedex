import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

import { addFavoritePokemonApi, isPokemonFavoriteApi, removeFavoritePokemonApi, getFavoritePokemonsApi } from '../../../api/favorites';
import useAuth from '../../../hooks/useAuth';

const FavoritePokemon = (props) => {
    const { updatePokemons } = useAuth()
    const { id } = props;
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
		(async () => {
            try {
                const response = await isPokemonFavoriteApi(id);
                setIsFavorite(response);
            } catch (err) {
                setIsFavorite(false);
            }
		})()
	}, [id]);


    const addFavorites = async () => {
        try {
            await addFavoritePokemonApi(id);
            setIsFavorite(true);
            const pokes = await getFavoritePokemonsApi();
            updatePokemons(pokes);
        } catch (err) {
            console.log(err);
        }
    }

    const removeFavorites = async () => {
        try {
            await removeFavoritePokemonApi(id);
            setIsFavorite(false);
            const pokes = await getFavoritePokemonsApi();
            updatePokemons(pokes);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Icon
            solid={isFavorite}
            name='heart'
            color='#fff'
            size={20}
            onPress={isFavorite ? removeFavorites : addFavorites}
            style={{ marginRight: 20 }}
        />
    )
}

export { FavoritePokemon }
