import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Keyboard, TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font';

import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../../../utils/userDB";

import useAuth from "../../../hooks/useAuth";

const LoginForm = () => {
    const [loginError, setLoginError] = useState();

    const { login } = useAuth();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (formData) => {
            setLoginError('');
            const { username, password } = formData;

            if ( (username !== user.username) || (password !== user.password) ) {
                setLoginError('Datos Incorrectos');
            } else {
                login(userDetails);
            }
            
        }
    })

    const [fontsLoaded] = useFonts({
        'Creepster': require('../../../../assets/fonts/Creepster-Regular.ttf'),
    });
    const font = 'Creepster';
    if (!fontsLoaded) {
        return null
    }

    return (
        <View>
            <Text style={styles.title} >Login</Text>
            <TextInput 
                placeholder="Username"
                style={styles.textInput}
                autoCapitalize="none"
                value={formik.values.username}
                onChangeText={(text) => formik.setFieldValue('username', text) }
            />
            <TextInput 
                placeholder="Password"
                style={styles.textInput}
                autoCapitalize="none"
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue('password', text) }
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.submitButton} onPress={ formik.handleSubmit } >
                    <Text style={{ ...styles.buttonText, fontFamily: font }}>log In</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.error} >{ formik.errors.username }</Text>
            <Text style={styles.error} >{ formik.errors.password }</Text>
            <Text style={styles.error} >{ loginError }</Text>
        </View>
    );
}

// FUNCIONES
const initialValues = () => {
    return {
        username: '',
        password: ''
    }
}

const validationSchema = () => {
    return {
        username: Yup.string().required('Not Username Yet'),
        password: Yup.string().required('Not Password Yet')
    }
}





// ESTILOS
const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15,
    },
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
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
        backgroundColor: '#455FA8'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 25,
        color: '#6B96FA'
    },
    error: {
        marginTop: 20,
        textAlign: 'center',
        color: '#d32525'
    }
})

export { LoginForm }