import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { FavoriteScreen } from '../screens/Favorite'

const Stack = createNativeStackNavigator()

const FavoriteNav = () => {
  return (

    <Stack.Navigator>
        <Stack.Screen name='Favorite' component={FavoriteScreen}/>
    </Stack.Navigator>

  )
}

export { FavoriteNav }
