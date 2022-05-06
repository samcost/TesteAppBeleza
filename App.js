import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Splash from './screens/Splash';
import Cadastro from './screens/Cadastro';
import Entrar from './screens/Entrar';
import LoggegTabNavigator from './navigators/LoggedTabNavigator';

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
                <Stack.Screen name="Cadastro" component={Cadastro} 
                    options={{
                        title: 'Fazer Cadastro',
                        headerTintColor:'#041637', 
                        headerTitleAlign:'center',
                        headerStyle: {
                            backgroundColor: '#FAFCFF',
                        },}}/>
                <Stack.Screen name="Entrar" component={Entrar}
                    options={{
                        title: 'Entrar',
                        headerTintColor:'#041637', 
                        headerTitleAlign:'center',
                        headerStyle: {
                        backgroundColor: '#FAFCFF',
                      },}}/>
                <Stack.Screen name="LoggegTabNavigator" component={LoggegTabNavigator} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

