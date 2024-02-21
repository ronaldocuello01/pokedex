import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import useAuth from "../../../hooks/useAuth";

import { useFonts } from 'expo-font';

const UserInformation = () => {
    const { auth, logout } = useAuth()

    const [fontsLoaded] = useFonts({
        'Creepster': require('../../../../assets/fonts/Creepster-Regular.ttf'),
    });
    const font = 'Creepster';
    if (!fontsLoaded) {
        return null
    }

    const favPokemons = 0;


    return (
        <View>
            <Text style={{ ...styles.title, fontSize: 35, fontFamily: font }}>Bienvenido</Text>
            <Text style={{ ...styles.title, fontSize: 25, fontFamily: font }}>{ auth.firstName } { auth.lastName }</Text>

            <DataItem title="Name" text={`${auth.firstName} ${auth.lastName}`} />
            <DataItem title="Username" text={auth.username} />
            <DataItem title="Email" text={auth.email} />
            <DataItem title="Total Favoritos" text={`${favPokemons} pokemons`} />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.submitButton} onPress={logout} >
                    <Text style={{ ...styles.buttonText, fontFamily: font }}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function DataItem (props) {
    const { title, text } = props;
    return (
        <View style={ styles.dataItemContainer }>
            <Text style={{ ...styles.dataItemText, fontWeight: 'bold' }}>{ title }:</Text>
            <Text style={{ ...styles.dataItemText }}>{ text }</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    title: {
        // textAlign: 'center',
        // marginTop: 50,
        margin: 10,
        marginBottom: 15,
        color: '#FC786D'
    },
    buttonContainer: {
        height: 40,
        width: '100%',
        marginTop: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitButton: {
        height: 40,
        width: 150,
        borderRadius: 10,
        backgroundColor: '#ccc',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#AD564B'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 25,
        color: '#FC786D'
    },
    dataItemContainer: {
        width: '100%',
        height: 50,
        padding: 10,
        marginTop: 10,
        flexDirection: 'row',
        paddingVertical: '20',
        borderBottomWidth: 1,
        borderBlockColor: '#cfcfcf'
    },
    dataItemText: {
        // fontWeight: 'bold',
        paddingRight: 10,
        width: '40%'
    }
});

export { UserInformation }