import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { firebase } from './src/firebase/firebase_config'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginScreen, HomeScreen, RegistrationScreen, UserFeedScreen, SearchScreen, NotificationScreen, ProfileScreen } from './src/screens'
import { Ionicons, MaterialCommunityIcons, FontAwesome, Foundation } from '@expo/vector-icons';
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Tab = createBottomTabNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

  if (loading) {
    return (
      <></>
    )
  }

  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = <MaterialCommunityIcons name="soccer-field" size={30} color="#009933" />
          } else if (route.name === 'Search') {
            iconName = <Foundation name="page-search" size={30} color="#ffa31a" />
          }
          else if (route.name == 'Notifications'){
            iconName = <MaterialCommunityIcons name="cellphone-message" size={24} color="#ff6699" />
          }
          else if (route.name == 'Profile'){
            iconName = <MaterialCommunityIcons name="account-badge-outline" size={30} color="#0066ff" />
          }

          // You can return any component that you like here!
          return iconName
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />

    </Tab.Navigator>
  </NavigationContainer>
);
}