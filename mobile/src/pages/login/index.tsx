import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Google from 'expo-google-app-auth'
import {RectButton} from 'react-native-gesture-handler'

import {ANDROID_CLIENT_ID, IOS_CLIENT_ID} from '../../utils/utils'

const Login = () => {
  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId: ANDROID_CLIENT_ID,
        iosClientId: IOS_CLIENT_ID,
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }
  
  return (
    <View>
      <RectButton
      style={{marginTop: 50}}
      onPress={signInWithGoogleAsync}
    >
      <Text>Entrar</Text>
    </RectButton>
    </View>
  )
}

export default Login