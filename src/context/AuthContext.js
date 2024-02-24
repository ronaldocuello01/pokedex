import React, { useState, createContext } from 'react'

const AuthContext = createContext({
    auth: undefined,
    favoritePokes: [],
    login: () => {},
    logout: () => {},
    updatePokemons: () => {},
})

const AuthProvider = (props) => {
    const { children } = props;
    const [auth, setAuth] = useState(undefined);
    const [favoritePokes, setFavoritePokes] = useState([]);

    const updatePokemons = (data) => {
        setFavoritePokes(data)
    }

    const login = (userData) => {
        setAuth(userData);
    }

    const logout = () => {
        setAuth(undefined);
    }

    const valueContext = {
        auth,
        favoritePokes,
        login,
        logout,
        updatePokemons
    }

    return (
        <AuthContext.Provider value={valueContext} >
            { children }
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };