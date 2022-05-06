import React from 'react';
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import Agendar from '../screens/Agendar';

const Stack = createStackNavigator();


export default function HomeStackNavigator() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Agendar" component={Agendar}
                    options={{title: 'Agendar serviço',
                    headerTintColor:'#041637', 
                    headerTitleAlign:'center',
                    headerStyle: {
                        backgroundColor: '#FAFCFF',
                      },}}
                />
            </Stack.Navigator>
    );
}