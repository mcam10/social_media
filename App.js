import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { firebase } from './src/firebase/firebase_config'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginScreen, HomeScreen, RegistrationScreen, UserFeedScreen, SearchScreen, NotificationScreen, ProfileScreen,PostScreen } from './src/screens'
import { Ionicons, MaterialCommunityIcons, FontAwesome, Foundation, EvilIcons, Entypo } from '@expo/vector-icons';
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
            iconName = focused
            ? <MaterialCommunityIcons name="home" size={30} color="black" />
            : <MaterialCommunityIcons name="home-outline" size={30} color="black" /> 
          } else if (route.name === 'Search') {
            iconName = focused
           ? iconName = <FontAwesome name="search" size={30} color="black" />
           : iconName = <EvilIcons name="search" size={30} color="black" />
          }
          else if (route.name == 'Notifications'){
            iconName = focused
            ? iconName = <Entypo name="heart" size={30} color="black" />
            : iconName = <Entypo name="heart-outlined" size={30} color="black" />
           }
          else if (route.name == 'Profile'){
            iconName = focused
            ? iconName = <MaterialCommunityIcons name="account" size={30} color="black" />
            : iconName = <MaterialCommunityIcons name="account-outline" size={30} color="black" />
           }
           else if (route.name == 'Post'){
            iconName = focused
            ? iconName = <MaterialCommunityIcons name="video" size={30} color="black" />
            : iconName = <MaterialCommunityIcons name="video-outline" size={30} color="black" />
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
      <Tab.Screen name="Post" component={PostScreen}/>
      <Tab.Screen name="Notifications" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);
}
