import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import {SimpleLineIcons} from '@expo/vector-icons'

import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

import HomeStackNavigator from './HomeStacknavigator';
import SearchStackNavigator from './SearchStackNavigator';
import SettingsStackNavigator from './SettingsStackNavigator';
import RequestsStackNavigator from './RequestsStackNavigator';

export default function LoggegTabNavigator() {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name='HomeStackNavigator'
                component={HomeStackNavigator}
                options={{
                    headerShown:false,
                    title: 'Principal',
                    tabBarActiveTintColor:'#95B8C4',
                    tabBarInactiveTintColor:'#95B8C4',
                    tabBarIcon: ({focused})=>(<SimpleLineIcons name={focused ? 'options': 'home'} size={25} color={'#95B8C4'}/>)
                }}
            />
            <Tab.Screen
                name='SearchStackNavigator'
                component={SearchStackNavigator}
                options={{
                    headerShown:false,
                    title: 'Buscar',
                    tabBarActiveTintColor:'#95B8C4',
                    tabBarInactiveTintColor:'#95B8C4',
                    tabBarIcon: ({focused})=>(<SimpleLineIcons name={focused ? 'options': 'magnifier'} size={25} color={'#95B8C4'}/>)
                }}
            />
            <Tab.Screen
                name='RequestsStackNavigator'
                component={RequestsStackNavigator}
                options={{
                    headerShown:false,
                    title:'Pedidos',
                    tabBarActiveTintColor:'#95B8C4',
                    tabBarInactiveTintColor:'#95B8C4',
                    tabBarIcon: ({focused})=>(<SimpleLineIcons name={focused ? 'options': 'list'} size={25} color={'#95B8C4'}/>)
                }}
            />
            <Tab.Screen
                name='SettingsStackNavigator'
                component={SettingsStackNavigator}
                options={{
                    headerShown:false,
                    tabBarActiveTintColor:'#95B8C4',
                    tabBarInactiveTintColor:'#95B8C4',
                    title:'Configurações',
                    tabBarIcon: ({focused})=>(<SimpleLineIcons name={focused ? 'options': 'settings'} size={25} color={'#95B8C4'}/>),
                }}
            />
        </Tab.Navigator>
    );
}