import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from '../screens/SettingsScreen';
import AddCard from '../screens/AddCard';


const Stack = createStackNavigator();

    export default function SettingsStackNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{headerShown: false}}/>
            <Stack.Screen name="AddCard" component={AddCard} 
                    options={{title:'Adicionar Cartão',
                        headerTintColor:'#041637', 
                        headerTitleAlign:'center',
                        headerStyle: {
                        backgroundColor: '#FAFCFF',
                        },}}/>
        </Stack.Navigator>
    );

}