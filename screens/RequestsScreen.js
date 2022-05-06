import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Constants from 'expo-constants';

import CardsRequests from '../components/CardsRequests';


export default function RequestsScreen() {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FAFCFF"/>
                <View style={styles.containerTop}>
                    <Text style={styles.categoriaTop}>Pedidos</Text>
                </View>
                <ScrollView>
                    <Text style={styles.categoria}>Em andamento</Text>
                    <CardsRequests/>
                    <Text style={styles.categoria}>Concluidos</Text>
                    <CardsRequests/>
                </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        opacity: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#FAFCFF',
    },
    containerTop:{
        height: 134,
        justifyContent:'center',
        alignItems:'center',
    },
    categoria:{
        fontSize: 18,
        color: '#434343F2',
        paddingLeft:23,
    },
    categoriaTop:{
        fontSize: 18,
        color: '#434343F2',
    }
});