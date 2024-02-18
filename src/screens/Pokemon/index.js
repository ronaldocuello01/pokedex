import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { getPokemonDetailsApi } from '../../api/pokemon';
import { PokemonInfoHeader } from '../../components/Pokemon/Header';
import { PokemonInfoTypes } from '../../components/Pokemon/Types';
import { PokemonInfoStats } from '../../components/Pokemon/Stats';

import Icon from 'react-native-vector-icons/FontAwesome5'

const PokemonScreen = (props) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const { navigation, route: { params } } = props;

  useEffect( () => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => <Icon name='arrow-left' color='#fff' size={20} style={ { marginLeft: 20 } } onPress={navigation.goBack} />
    });
  }, [navigation, params] )

  useEffect( () => {
    (async () => {
      await loadPokemonInformation();
    })()
  }, [params] )


  const loadPokemonInformation = async () => {
    try {
      const pokemonDetails = await getPokemonDetailsApi(params.urlInfo);
      setPokemonInfo(pokemonDetails);
      
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

const styles = StyleSheet.create({

});


export { PokemonScreen }
