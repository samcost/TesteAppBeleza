import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import 'react-native-gesture-handler';


export default function Cadastro({navigation},) {
    const usuarios = [];
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [CPF, setCPF] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');


    function cadastar(){

        const json = {
            nome: nome,
            email: email,
            CPF: CPF,
            telefone: telefone,
            senha: senha,
        }
        usuarios.push(json);
        console.log(usuarios);
        const myArrStr = JSON.stringify(usuarios);
        navigation.navigate('Entrar', myArrStr)
    }



    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.ContainerForm}>
                <TextInput style={styles.InputForm} value={nome} onChangeText={setNome} placeholder='Nome completo'/>
                <TextInput style={styles.InputForm} value={email} onChangeText={setEmail} placeholder='Email'/>
                <TextInput style={styles.InputForm} value={CPF} onChangeText={setCPF} placeholder='CPF'  keyboardType='numeric'/>
                <TextInput style={styles.InputForm} value={telefone} onChangeText={setTelefone} placeholder='Telefone'  keyboardType='numeric'/>
                <TextInput style={styles.InputForm} value={senha} onChangeText={setSenha} placeholder='Senha'/>
            </KeyboardAvoidingView>
            <View style={styles.ContainerButton}>
                <TouchableWithoutFeedback onPress={() => cadastar()}>
                    <View style={styles.Button}>
                        <Text style={styles.TextButton}>Cadastrar</Text>
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
        paddingTop:20,
    },
    ContainerForm:{
        width: 295,
        height: 430,
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
        letterSpacing: 0,
        fontSize:14,
        color: '#FFFFFF',
        opacity: 1,
    }

});