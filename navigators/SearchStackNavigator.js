import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from '../screens/SearchScreen';
import Agendar from '../screens/Agendar';



const Stack = createStackNavigator();

export default function SearchStackNavigator() {
  return(
      <Stack.Navigator>
            <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Agendar" component={Agendar} 
                  options={{title: 'Agendar serviço',
                    headerTintColor:'#041637', 
                    headerTitleAlign:'center',
                    headerStyle: {
                        backgroundColor: '#FAFCFF',
                      },}}/>
      </Stack.Navigator>
  );

}