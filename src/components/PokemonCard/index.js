import React from 'react'
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { getPokemonColorMain } from '../../utils/globalFunctions'

const PokemonCard = (props) => {
    const { pokemon, externalScreen } = props;
    const navigation = useNavigation();
    const pokemonColor = getPokemonColorMain(pokemon.type);
    const boxStyle = { ...styles.card, backgroundColor: pokemonColor }

    const goToPokemon = () => {
        externalScreen ?
        navigation.navigate('Pokemon', { id: pokemon.id, infoBy: 'id' } ) : 
        navigation.navigate('Pokemon', { id: pokemon.id, infoBy: 'url', urlInfo: pokemon.urlInfo } );
    }
    
    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={boxStyle}>
                <View style={styles.cardImage}>
                    <Image source={{ uri: pokemon.image }} style={styles.image} />
                </View>
                <View style={styles.cardText}>
                    <Text style={styles.name} >{ pokemon.name }</Text>
                    <Text style={styles.pokemonInfo} >Order: #{ `${pokemon.order}`.padStart(3, 0) }</Text>
                    <Text style={styles.pokemonInfo} >Type: { pokemon.type }</Text>
                </View>
                
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 150,
        margin: 2,
        borderRadius: 8
    },
    cardImage: {
        alignItems: "flex-end",
    },
    cardText: {
        height: "100%",
        justifyContent: "flex-end",
        padding: 4
    },
    image:{
        position: "absolute",
        width: 150,
        height: 150,
    },
    name: {
        color: "#fefefe",
        fontWeight: "bold",
        fontSize: 30,
    },
    pokemonInfo: {
        color: "#fefefe",
        fontSize: 15,
    }
})

export { PokemonCard }
