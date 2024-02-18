import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { useFonts } from 'expo-font';

import { getPokemonColorMain, getPokemonColorSecond } from '../../../utils/globalFunctions';

const PokemonInfoTypes = (props) => {
    const { types } = props;

    const [fontsLoaded] = useFonts({
        'Creepster': require('../../../../assets/fonts/Creepster-Regular.ttf'),
    });

    const font = 'Creepster';

    if (!fontsLoaded) {
        return null
    }

    return (
        <View style={ styles.container }>
            {
                types.map(type => {
                    const mainColor = getPokemonColorMain(type.type.name);
                    const secondColor = getPokemonColorSecond(type.type.name);
                    return (
                        <View key={type.type.name} style={{ ...styles.typeContainer, backgroundColor: secondColor }}>
                            <Text style={{ ...styles.text, fontFamily: font, color: mainColor }} >{type.type.name}</Text>
                        </View>
                    ) 
                } )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25,
        alignSelf: 'center'
    },
    typeContainer: {
        height: 25,
        width: 80,
        margin: 5,
        backgroundColor: '#aaa',
        borderRadius: 12,
    }
});

export { PokemonInfoTypes }
