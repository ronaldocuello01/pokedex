import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { getPokemonDetailsApi, getPokemonDetailsByIdApi } from '../../api/pokemon';
import { PokemonInfoHeader } from '../../components/Pokemon/Header';
import { PokemonInfoTypes } from '../../components/Pokemon/Types';
import { PokemonInfoStats } from '../../components/Pokemon/Stats';
import { FavoritePokemon } from '../../components/Pokemon/Favorites';
import useAuth from '../../hooks/useAuth';

const PokemonScreen = (props) => {
	const { auth } = useAuth();
	const { navigation, route: { params } } = props;
	const [pokemonInfo, setPokemonInfo] = useState(null);

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => auth && <FavoritePokemon id={pokemonInfo?.id} />,
			headerLeft: () => <Icon name='arrow-left' color='#fff' size={20} style={{ marginLeft: 20 }} onPress={navigation.goBack} />
		});
	}, [navigation, params, pokemonInfo, auth])

	useEffect(() => {
		(async () => {
			await loadPokemonInformation();
		})()
	}, [params])

	const loadPokemonInformation = async () => {
		try {
			if (params.infoBy === 'url') {
				const pokemonDetails = await getPokemonDetailsApi(params.urlInfo);
				setPokemonInfo(pokemonDetails);
			} else {
				const pokemonDetails = await getPokemonDetailsByIdApi(params.id);
				setPokemonInfo(pokemonDetails);
			}

		} catch (err) {
			navigation.goBack();
		}
	}

	if (!pokemonInfo) return null;

	return (
		<ScrollView>
			<PokemonInfoHeader
				name={pokemonInfo.name}
				image={pokemonInfo.sprites.other['official-artwork'].front_default}
				type={pokemonInfo.types[0].type.name}
			/>
			<PokemonInfoTypes types={pokemonInfo.types} />
			<PokemonInfoStats stats={pokemonInfo.stats} type={pokemonInfo.types[0].type.name} />
		</ScrollView>
	)
}

export { PokemonScreen }
