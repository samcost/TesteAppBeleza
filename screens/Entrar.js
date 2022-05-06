import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TextInput, KeyboardAvoidingView } from 'react-native';



export default function Entrar({navigation}) {


    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='height' style={styles.ContainerForm}>
                <TextInput style={styles.InputForm} placeholder='Email'/>
                <TextInput style={styles.InputForm} placeholder='Senha'/>
            </KeyboardAvoidingView>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('LoggegTabNavigator')}>
                <View style={styles.ContainerButton}>
                    <Text style={styles.TextButton}>Entrar</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.register}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.textregister}>Esqueceu a senha?</Text>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.containerRegister}>
                <Text style={styles.Text}>Não possui uma conta? 
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.textregister}> Cadastre-se</Text>
                    </TouchableWithoutFeedback>
                </Text>
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
    },
    ContainerForm:{
        width: 295,
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
        width: 295,
        height: 70,
        justifyContent: "center",
        backgroundColor: '#95B8C4',
        opacity: 1,
        borderRadius:40,
        marginTop:20,
    },
    register:{
        marginTop:20,
    },
    textregister:{
        textAlign: 'center',
        color: '#D28369',
        fontSize: 14,
    },
    containerRegister:{
        width: 295,
        height: 60,
        backgroundColor: '#FAFAFA',
        borderRadius: 30,
        justifyContent: "center",
        marginTop:40,
    },
    Text:{
        textAlign: 'center',
        fontSize: 12,
    },
    TextButton: {
        textAlign: 'center',
        fontSize: 24,
        letterSpacing: 0,
        fontSize:14,
        color: '#FFFFFF',
        opacity: 1,
    },

});