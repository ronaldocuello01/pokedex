import React, { useState, createContext } from 'react'
import {  } from 'react'



const AuthContext = createContext({
    auth: undefined,
    login: () => {},
    logout: () => {},
})


const AuthProvider = (props) => {
    const { children } = props;
    const [auth, setAuth] = useState(undefined);


    const login = (userData) => {
        setAuth(userData);
    }

    const logout = () => {
        setAuth(undefined);
    }

    const valueContext = {
        auth,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={valueContext} >
            { children }
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };