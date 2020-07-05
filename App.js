import * as React from 'react';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoadingScreen from './src/screens/LoadingScreen'
import LoadingNavigator from './src/navigation/LoadingNavigator';

import * as firebase from 'firebase';
import firebaseconfig from './firebase';

// initialize firebase
firebase.initializeApp(firebaseconfig);

export default function App(){
  return <LoadingNavigator/>
}

// const AppStack = createStackNavigator({
//   Home: HomeScreen
// })

// const AuthStack = createStackNavigator({
//   Login: LoginScreen,
//   Register: RegisterScreen
// })

// const MyNavigator = createSwitchNavigator({
//   routeNameOne: LoadingScreen
// });