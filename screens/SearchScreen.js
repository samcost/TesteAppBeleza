import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, Image, TextInput, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import {SimpleLineIcons} from '@expo/vector-icons';


import Cards from '../components/Cards';


export default function SearchScreen({navigation}) {

    const [searchText, setSearchText] = useState('');

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#95B8C4"/>
            <View style={styles.containersearch}>
                <SimpleLineIcons name={'magnifier'} size={18} color={'#FFFFFF'}/>
                <TextInput
                    value={searchText}
                    onChangeText={(t) => setSearchText(t)}
                    placeholder='O que você está buscando?'
                    placeholderTextColor='#FFFFFF'
                />
            </View>
            <StatusBar backgroundColor="#95B8C4"/>
            <ScrollView>
                <Text style={styles.categoria}>Categorias</Text>
                <Cards navigation={navigation} route={searchText}/>
                <Cards navigation={navigation} route={searchText}/>
                <Cards navigation={navigation} route={searchText}/>
                <Cards navigation={navigation} route={searchText}/>
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
    containersearch:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingRight:60,
        alignItems:'center',
        height: 130,
        backgroundColor: '#95B8C4',
    },
    containerTop:{
        height: 340,
        backgroundColor: '#95B8C4',
    },
    containerText:{
        paddingLeft:23,
        paddingTop: 40,
    },
    TextTitle:{
        fontSize: 36,
        color: "#FFFFFFF2",
    },
    Text:{
        fontSize: 16,
        color: "#FFFFFFF2",
    },
    address:{
        width: 327,
        height: 60,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#FFFFFF',
        opacity: 1,
        marginTop:30,
        alignSelf:'center',
    },
    scrolltop:{
        height: 218,
        flexDirection:'row',
    },
    cardtop:{
        borderRadius: 25,
    },
    categoria:{
        fontSize: 18,
        color: '#434343F2',
        paddingLeft:23,
        paddingTop: 10,
    }
});