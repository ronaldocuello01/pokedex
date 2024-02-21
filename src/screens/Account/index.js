import React from 'react'
import { View, Text } from 'react-native'

import { UserInformation } from '../../components/Auth/UserInformation';
import { LoginForm } from '../../components/Auth/LoginForm';

import useAuth from '../../hooks/useAuth';

const AccountScreen = () => {

  const { auth } = useAuth();

  return (
    <View>
        { auth ? <UserInformation /> : <LoginForm /> }
    </View>

  )
}

export { AccountScreen }
