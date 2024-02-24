import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { FavoriteScreen } from '../screens/Favorite'
import { PokemonScreen } from '../screens/Pokemon'

const Stack = createNativeStackNavigator()

const FavoriteNav = () => {
  return (

    <Stack.Navigator>
        <Stack.Screen name='Favorite' component={FavoriteScreen}/>
        <Stack.Screen name='Pokemon' component={PokemonScreen} options={{ title: "", headerTransparent: true }} />
    </Stack.Navigator>

  )
}

export { FavoriteNav }
