import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//import LoadingScreen from '../screens/LoadingScreen';

const Stack = createStackNavigator()

function LoadingNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Loading' component={LoadingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default LoadingNavigator;