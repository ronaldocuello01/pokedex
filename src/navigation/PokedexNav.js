import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { PokedexScreen } from '../screens/Pokedex'
import { PokemonScreen } from '../screens/Pokemon'

const Stack = createNativeStackNavigator()

const PokedexNav = () => {
  return (

    <Stack.Navigator>
        <Stack.Screen name='Pokedex' component={PokedexScreen} options={{ title: "" }} />
        <Stack.Screen name='Pokemon' component={PokemonScreen} options={{ title: "", headerTransparent: true }} />
    </Stack.Navigator>
    // headerTransparent: true
  )
}

export { PokedexNav }
