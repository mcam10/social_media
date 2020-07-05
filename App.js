import * as React from 'react';
import 'react-native-gesture-handler';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoadingScreen from './src/screens/LoadingScreen'

// Navigations
import LoadingNavigator from './src/navigation/LoadingNavigator';
import HomeNavigator from './src/navigation/HomeNavigator'
import LoginNavigator from './src/navigation/LoginNavigator'

import * as firebase from 'firebase';
import firebaseconfig from './firebase_config';

// initialize firebase
//firebase.initializeApp(firebaseconfig);


export default createAppContainer(
  createSwitchNavigator({
    Loading: LoadingScreen,
    App: HomeNavigator,
    Auth: LoginNavigator // fix up proper screens + navigators
  
  },{
    initialRouteName: "Loading"
  })
)
