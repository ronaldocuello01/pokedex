import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { useFonts } from 'expo-font';

import { getPokemonColorMain, getPokemonColorSecond } from '../../../utils/globalFunctions';

const PokemonInfoStats = (props) => {
    const { stats, type } = props;

    const [fontsLoaded] = useFonts({
        'Creepster': require('../../../../assets/fonts/Creepster-Regular.ttf'),
    });

    const font = 'Creepster';

    if (!fontsLoaded) {
        return null
    }

    const mainColor = getPokemonColorMain(type);
    const secondColor = getPokemonColorSecond(type);


    return (
        <View style={ styles.container }>
            {
                stats.map((stat, index) => {
                    return (
                        <View key={index} style={styles.statContainer}>
                            <View style={ styles.textBlock }>
                                <Text style={{ ...styles.statName, fontFamily: font, color: mainColor }} >{stat.stat.name}</Text>
                            </View>
                            <View style={ styles.infoBlock } >
                                <Text style={ styles.number } >{ stat.base_stat }</Text>
                                <View style={ styles.barStatus }>
                                    <View style={{ ...styles.status, backgroundColor: secondColor, width: `${stat.base_stat}%` }}>
                                    
                                    </View>
                                </View>
                            </View>
                        </View>
                    ) 
                } )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    statContainer: {
        height: 30,
        width: '100%',
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    textBlock: {
        width: "30%",
    },
    infoBlock: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    statName: {
        fontSize: 15
    },
    number: {
        width: '15%',
        fontWeight: 'bold',
        fontSize: 15
    },
    barStatus: {
        backgroundColor: '#ddd',
        height: 5,
        width: '85%',
        borderRadius: 20,
        overflow: 'hidden'
    },
    status: {
        height: '100%',
        width: 100,
        borderRadius: 20
    }
});

export { PokemonInfoStats }
