import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import 'react-native-gesture-handler';


export default function AddCard({navigation},) {


    return (
        <View style={styles.container}>
            <KeyboardAvoidingView keyboardVerticalOffset={0} behavior='height' style={styles.ContainerForm}>
                <TextInput style={styles.InputForm} placeholder='Número do cartão' keyboardType='numeric'/>
                <View style={styles.ContainerInt}>
                    <TextInput style={styles.InputInt} placeholder='Validade' keyboardType='numeric'/>
                    <TextInput style={styles.InputInt} placeholder='CVV'  keyboardType='numeric'/>
                </View>
                <TextInput style={styles.InputForm} placeholder='Nome do titular'/>
                <TextInput style={styles.InputForm} placeholder='CPF do titular' keyboardType='numeric'/>
            </KeyboardAvoidingView>
            <View style={styles.ContainerButton}>
                <TouchableWithoutFeedback onPress={() => cadastar()}>
                    <View style={styles.Button}>
                        <Text style={styles.TextButton}>Adicionar cartão</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFCFF',
        opacity: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:70,
    },
    ContainerForm:{
        height: 426,
    },
    InputForm:{
        height: 70,
        margin:5,
        padding: 20,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#F3F0F0',
        opacity: 1,
    },
    ContainerButton:{
        flex: 2,
        width: 375,
        height: 118,
        borderRadius: 40,
        shadowRadius: 40,
        shadowColor: '#0416370D',
        backgroundColor: '#FFFFFF',
        alignItems:'center',
    },
    Button:{
        width: 295,
        height: 70,
        justifyContent: "center",
        backgroundColor: '#95B8C4',
        opacity: 1,
        borderRadius:40,
        marginTop:20,
    },
    TextButton:{
        textAlign: 'center',
        fontSize: 14,
        letterSpacing: 0,
        color: '#FFFFFF',
        opacity: 1,
    },
    ContainerInt:{
        flexDirection:'row',
    },
    InputInt:{
        width: 156,
        margin:5,
        padding: 20,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#F3F0F0',
        opacity: 1,
    }

});