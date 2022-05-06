import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, FlatList} from 'react-native';


export default function Cards({navigation}) {

    const servicos = [
        {
            id: 1,
            nome:'Pés e Mãos',
            valor:'R$ 12.90',
        },
        {
            id: 2,
            nome:'Serviço com texto longo e maior',
            valor:'R$ 9.90',
        },
        {
            id: 3,
            nome:'Pés',
            valor:'R$ 49,90',
        }
    ]

    function renderItem({item}){
        return <View style={styles.card}>
            <Image source={require('../assets/img/Mask4.png')}/>
            <Text style={styles.textTitle}>{item.nome}</Text>
            <Text style={styles.textValue}>A partir de R$</Text> 
            <Text style={styles.textValue}>{item.valor}</Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Agendar')}>
                <View style={styles.button}>
                    <Text style={styles.Textbutton}>Conheça</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    }
    return (
        <View>
            <FlatList
                data = {servicos}
                renderItem = {renderItem}
                keyExtractor= {item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        width: 165,
        height: 231,
        backgroundColor: '#FFFFFF',
        borderRadius:25,
        margin: 25,
    },
    textTitle:{
        fontSize: 14,
        height: 44,
        color: '#434343F2',
        paddingLeft:15,
        textAlign: 'left',
    },
    textValue:{
        fontSize: 15,
        color: '#D28369',
        paddingLeft:15,
        textAlign: 'left',
    },
    button:{
        width: 153,
        height: 35,
        justifyContent: "center",
        backgroundColor: '#95B8C4',
        opacity: 1,
        borderRadius:35,
        marginTop:10,
        alignSelf:'center',
    },
    Textbutton:{
        textAlign: 'center',
        fontSize: 12,
        letterSpacing: 0,
        color: '#FFFFFF',
        opacity: 1,
    },
    cardimg:{
        width: 165,
        height: 94,
    },
});