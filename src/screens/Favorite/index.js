import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { PokemonList } from '../../components/PokemonList';
import { getPokemonDetailsByIdApi } from '../../api/pokemon';
import { getFavoritePokemonsApi } from '../../api/favorites';
import useAuth from '../../hooks/useAuth';

import { NoLogin } from '../../components/NoLogin';

const FavoriteScreen = () => {
	const { auth, favoritePokes } = useAuth();
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		
		(async () => {
			if (auth) {
				const favoritePokemons = await getFavoritePokemonsApi();
				loadPokemons(favoritePokemons);
			}
		})()
		
	}, [auth, favoritePokes])

	const loadPokemons = async (ids) => {
		try {

			const pokemonArray = []

			for await (const pokeId of ids) {
				const pokemonDetails = await getPokemonDetailsByIdApi(pokeId);
				pokemonArray.push({
					id: pokemonDetails.id,
					name: pokemonDetails.name,
					type: pokemonDetails.types[0].type.name,
					order: pokemonDetails.order,
					image: pokemonDetails.sprites.other['official-artwork'].front_default
				});
			}

			setFavorites(pokemonArray);

		} catch (err) {
			console.log('FavoriteScreen - loadPokemons', err);
		}
	}

	return auth ? (
		<View>
			<PokemonList
				pokemons={favorites}
				externalScreen={true}
			/>
		</View>
	) : (
		<NoLogin />
	)

}

export { FavoriteScreen }
