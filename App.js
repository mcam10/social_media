import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import {RegistrationScreen, LoadingScreen, LoginScreen, HomeScreen} from './src/screens'
import { NavigationContainer } from '@react-navigation/native';
import {decode, encode} from 'base-64'
if (!global.btoa) { global.btoa = encode }
if (!global.atob) {global.atob = decode }


// initialize firebase
//firebase.initializeApp(firebaseconfig);

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        { user ? (
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
        ): (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegistrationScreen} />
          </>
        )}
        </Stack.Navigator>
    </NavigationContainer>
  );
}
