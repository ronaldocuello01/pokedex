import React from 'react'
import { SafeAreaView, Text, StyleSheet, View, Image, Dimensions } from 'react-native'
import { useFonts } from 'expo-font';

import { getPokemonColorMain, getPokemonColorSecond } from '../../../utils/globalFunctions';

const PokemonInfoHeader = (props) => {
    const { image, name, type } = props;

    const [fontsLoaded] = useFonts({
        'Concert': require('../../../../assets/fonts/ConcertOne-Regular.ttf'),
        'Creepster': require('../../../../assets/fonts/Creepster-Regular.ttf'),
        'Gruppo': require('../../../../assets/fonts/Gruppo-Regular.ttf'),
    });

    const font = 'Creepster';

    if (!fontsLoaded){
        return null
    }

    const textColor = getPokemonColorMain(type);
    const pokemonBackgroundColor = getPokemonColorSecond(type);

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const headerCompensation = windowHeight * 0.1;
    const radius = windowWidth / 2;

    const nameStyle = { ...styles.name, fontFamily: font, color: textColor }
    const typeStyle = { ...styles.type, fontFamily: font, color: textColor }
    const containerStyle = { ...styles.container, borderRadius: radius, backgroundColor: pokemonBackgroundColor, paddingTop: headerCompensation }
    const imageContainerStyle = { ...styles.imageContainer }

    return (
        <SafeAreaView>
            <View style={containerStyle}>
                <View style={imageContainerStyle}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
                <View style={styles.nameContainer}>
                    <Text style={nameStyle}>
                        { name }
                    </Text>
                    <Text style={typeStyle}>
                        { type }
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#aaa',
        height: 400,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0
    },
    imageContainer: {
        justifyContent: 'flex-end',
        alignItems: "center",
        position: 'absolute',
        height: '100%',
        width: '100%',
        bottom: 0
    },
    nameContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: '100%',
        width: '100%'
        
    },
    image: {
        width: 300,
        height: 300
    },
    name: {
        fontSize: 50,
        color: '#fefefe',
        margin: 10
    },
    type: {
        fontSize: 30,
        color: '#fefefe',
        margin: 10
    }
});

export { PokemonInfoHeader }
