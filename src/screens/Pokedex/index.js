import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'

import { getPokemonApi, getPokemonDetailsApi } from '../../api/pokemon';

import { PokemonList } from '../../components/PokemonList';


const PokedexScreen = () => {

  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      setLoading(true);
      const response = await getPokemonApi(nextUrl);
      setNextUrl(response.next);
      const pokemonArray = []
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsApi(pokemon.url);
        pokemonArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default,
          urlInfo: pokemon.url
        });
      }

      setPokemons([...pokemons, ...pokemonArray]);

    } catch (err) {
      console.log('err:', err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView>
      <PokemonList 
        pokemons={pokemons}
        loadPokemons={loadPokemons} 
        areNext={nextUrl} 
        isLoading={loading}
      />
    </SafeAreaView>
  )
}

export { PokedexScreen }
