import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import RequestsScreen from '../screens/RequestsScreen';


const Stack = createStackNavigator();

export default function RequestsStackNavigator() {
  return(
      <Stack.Navigator>
        <Stack.Screen name="RequestsScreen" component={RequestsScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
  );

}