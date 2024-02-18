import React from 'react'
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/FontAwesome5'

// import { FavoriteScreen } from '../screens/Favorite';
// import { PokedexScreen } from '../screens/Pokedex';

import { FavoriteNav } from './FavoriteNav';
import { PokedexNav } from './PokedexNav';
import { AccountScreen } from '../screens/Account';

const Tab = createBottomTabNavigator();

const tabs = [
    {
        id: "Fav",
        component: FavoriteNav,
        options: {
            label: "Favoritos",
            iconName: "heart",
            showHead: false
        }
    },
    {
        id: "Poke",
        component: PokedexNav,
        options: {
            label: "",
            personalIcon: {
                icon: require('../assets/pokeball.png')
            },
            showHead: false
        }
    },
    {
        id: "Account",
        component: AccountScreen,
        options: {
            label: "Cuenta",
            iconName: "user",
            showHead: true
        }
    },
]

const renderIcon = (icon) => {
    return (
        <Image 
            source={ icon }
            style={{ width: 50,  height: 50, top: -19 }}
        />
    )
}



const Navigation = () => {
  return (
    <Tab.Navigator>

        {
            tabs.map(
                tab => (
                    <Tab.Screen 
                        key={tab.id}
                        name={tab.id} 
                        component={tab.component} 
                        options={{ 
                            headerShown: tab.options.showHead,
                            tabBarLabel: tab.options.label, 
                            tabBarIcon: (color, size) => {
                                if (!!tab.options?.personalIcon){
                                    return renderIcon( tab.options.personalIcon.icon )
                                }
                                return (
                                    <Icon name={tab.options.iconName} color={color} size={size} />
                                ) 
                            }
                        }} />
                )
            )
        }

    </Tab.Navigator>
  )
}

export { Navigation }
