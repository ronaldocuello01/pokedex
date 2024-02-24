import React from 'react'
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const NoLogin = () => {
    const navigation = useNavigation();

    const goToLogin = () => {
        navigation.navigate('Account');
    }
    
    return (
        <View>

            <Text style={styles.mainText}>No users logged in</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.submitButton} onPress={goToLogin} >
                    <Text style={styles.buttonText}>Go to Log In</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainText: {
        marginTop: 50,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
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
    }
})

export { NoLogin }
