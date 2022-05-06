import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';


export default function CardsRequests() {
    const pedidos = [
            {
                id: 1,
                nome:'Nome de serviço grande e longo',
                valor:'R$ 29,90',
                endereco: 'Av Miguel Castro, 600, Lagoa Nova',
                data:'Terça feira 10/04/22 as 21:00h',
            },
            {
                id: 2,
                nome:'Nome de serviço grande e longo',
                valor:'R$ 29,90',
                endereco: 'Av Miguel Castro, 600, Lagoa Nova',
                data:'Terça feira 10/04/22 as 21:00h',
            },
            {
                id: 3,
                nome:'Nome de serviço grande e longo',
                valor:'R$ 29,90',
                endereco: 'Av Miguel Castro, 600, Lagoa Nova',
                data:'Terça feira 10/04/22 as 21:00h',
            }
    ];

    function renderItem({item}){
        return <View>
                <View style={styles.card}>
                    <Text style={styles.text}>{item.nome}</Text>
                    <View style={styles.text}><Text>{item.data}</Text></View>
                    <Text style={styles.text}>No endereço:</Text>
                    <Text style={styles.text}>{item.endereco}</Text>
                    <Text style={styles.text}>{item.valor}</Text>
                </View>
        </View>
    }

    return (
        <View>
            <FlatList
                data = {pedidos}
                renderItem = {renderItem}
                keyExtractor= {item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        flex:1,
        width: 329,
        height: 182,
        backgroundColor: '#FFFFFF',
        borderRadius:20,
        alignItems:'center',
        alignSelf:'center',
        margin:20,
    },
    text:{
        fontSize: 14,
        color: '#434343F2',
        marginTop:10,
    },
    button:{
        width: 153,
        height: 35,
        justifyContent: "center",
        backgroundColor: '#95B8C4',
        opacity: 1,
        borderRadius:35,
        marginTop:20,
        alignSelf:'center',
    },
    Textbutton:{
        textAlign: 'center',
        fontSize: 12,
        letterSpacing: 0,
        color: '#FFFFFF',
        opacity: 1,
    },
    categoria:{
        fontSize: 18,
        color: '#434343F2',
        paddingLeft:23,
    },
});