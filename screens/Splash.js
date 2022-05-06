import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image } from 'react-native';


import ButtonPrimary from '../components/ButtonPrimary';

export default function Splash({navigation}) {



  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/img/Grupo51.png')}/>
        <Image style={styles.imgsplash} source={require('../assets/img/Grupo52.png')}/>
        <View style={styles.title}>
            <Text style={styles.textTitle}>Inspiração que aproxima</Text>
        </View>
        <View style={styles.text}>
            <Text style={styles.textDetails}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales est enim, id luctus dui dignissim nec
            </Text>
        </View>
        <ButtonPrimary navigation={navigation}/>
        <View style={styles.register}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.textregister}>Fazer cadastro</Text>
            </TouchableWithoutFeedback>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        opacity: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        margin:10,
    },
    textTitle:{
        textAlign: 'center',
        color: '#041637',
        opacity: 1,
        fontSize: 24,
    },
    text:{
        width: 280,
        height: 63,
    },
    textDetails:{
        textAlign: 'center',
        color: '#B3B9C2',
        opacity: 1,
    },
    register:{
        width: 94,
        height: 18,
        marginTop:20,
    },
    textregister:{
        textAlign: 'center',
        color: '#D28369',
        fontSize: 14,
    },
    imgsplash:{
        width: 343,
        height: 305,
        opacity: 1,
    },
    logo:{
        width: 145,
        height: 80,
        marginBottom:30,
    }
});