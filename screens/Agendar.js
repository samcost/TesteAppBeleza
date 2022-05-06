import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {SimpleLineIcons} from '@expo/vector-icons'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Modal, Dimensions, Pressable } from 'react-native';
import 'react-native-gesture-handler';

import Tab from '../components/Tab';
import DateScrool from '../components/DateScrool';


export default function Agendar({navigation}) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={modalVisible ? "#000000" : "#FAFCFF"}/>
            <Text style={styles.TextNome}>Nome de serviço grande e longo</Text>
            <DateScrool/>
            <View style={styles.ContainerInfo}>
                <Text style={styles.TextInfo}>Este serviço dura em média XX horas e a atendente irá escolher algum dos horários que você selecionar</Text>
            </View>
            <View style={styles.ContainerMid}>
                <Text style={styles.ContainerMid}>Quais horários você está disponível para receber a profissional?</Text>
            </View>
            <View style={styles.ContainerTab}>
                <View style={styles.TabTitle}>
                    <Text style={styles.TextTitle}>Manhã</Text>
                    <Text style={styles.TextTitle}>Tarde</Text>
                    <Text style={styles.TextTitle}>Noite</Text>
                </View>
                <View style={styles.TabTitle}>
                    <View style={styles.Tabitem}>
                        <Tab/>
                    </View>
                    <View style={styles.Tabitem}>
                        <Tab/>
                    </View>
                    <View style={styles.Tabitem}>
                        <Tab/>
                    </View>
                </View>
                <View style={styles.TabTitle}>
                    <View style={styles.Tabitem}>
                        <Tab/>
                    </View>
                    <View style={styles.Tabitem}>
                        <Tab/>
                    </View>
                    <View style={styles.Tabitem}>
                        <Tab/>
                    </View>
                </View>
                <View style={styles.TabTitle}>
                    <View style={styles.Tabitem}>
                        <Tab/>
                    </View>
                    <View style={styles.Tabitem}>
                        <Tab/>
                    </View>
                    <View style={styles.Tabitem}>
                        <Tab/>
                    </View>
                </View>
                <View style={styles.TabTitle}>
                    <View style={styles.Tabitem}>
                        <Tab/>
                    </View>
                    <View style={styles.Tabitem}>
                        <Tab/>
                    </View>
                    <View style={styles.Tabitem}>
                        <Tab/>
                    </View>
                </View>
            </View>
            <View style={styles.ContainerButton}>
                <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                    <View style={styles.Button}>
                        <Text style={styles.TextButton}>Avançar</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {setModalVisible(!modalVisible);}}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modaltitle}>
                            <Text style={styles.textStyle}>Confirmar escolha de horário</Text>
                            <Pressable onPress={() => setModalVisible(!modalVisible)}>
                                <SimpleLineIcons name={'close'} size={18} color={'#000000'}/>
                            </Pressable>
                        </View>
                        <Text style={styles.ContainerMid}>Confirma que a profissional poderá te atender no dia 25/04/2022 as 12:00h?</Text>
                        <View style={styles.InfoModal}>
                            <Text style={styles.TextInfo}>Agendamento flexível</Text>
                            <Text style={styles.TextInfo}>R$ 29,90</Text>
                        </View>
                        <View style={styles.Buttons}>
                            <Pressable onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.TextInfo}>Não, desejo voltar</Text>
                            </Pressable>
                            <View style={styles.ButtonModal}>
                                <Text style={styles.TextButton}>Sim, continuar</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFCFF',
        opacity: 1,
    },
    ContainerButton:{
        flex:2,
        justifyContent:'center',
        borderTopLeftRadius: 40,
        borderTopRightRadius:40,
        shadowRadius: 40,
        shadowColor: '#0416370D',
        backgroundColor: '#FFFFFF',
    },
    Button:{
        width: 295,
        height: 70,
        alignSelf:"center",
        justifyContent: "center",
        backgroundColor: '#95B8C4',
        opacity: 1,
        borderRadius:40,
    },
    TextButton:{
        textAlign: 'center',
        fontSize: 14,
        letterSpacing: 0,
        color: '#FFFFFF',
        opacity: 1,
    },
    ContainerInfo:{
        width: 329,
        height: 60,
        backgroundColor: '#EDEDED',
        borderRadius: 10,
        marginTop:10,
        justifyContent:'center',
        alignSelf:'center',
    },
    TextInfo:{
        fontSize:16,
        color: '#919191F2',
        padding:1,
        alignItems:'center',
        textAlign: 'center',
    },
    ContainerMid:{
        alignItems:'center',
        textAlign: 'center',
        width: 329,
        height: 58,
        margin:10,
        fontSize:14,
        color:'#919191F2',
    },
    ContainerTab:{
    },
    TabTitle:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    TextTitle:{
        color:'#434343F2',
        fontSize:16,
        padding:10,
    },
    Tabitem:{
        padding:10,
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#000000",
        opacity: 0.85,

    },
    modalView: {
        height: 316,
        width: 376,
        backgroundColor:"#FFFFFF",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
    },
    modaltitle:{
        width: 327,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignSelf:'center',
        alignItems:'center',
        fontSize:18,
        color:'#041637',
    },
    InfoModal:{
        width: 327,
        height: 60,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#B9B9B9F2',
        alignSelf:'center',
        alignItems:'center',
        justifyContent: 'space-around',
        flexDirection:'row',
    },
    Buttons:{
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingTop:30,
        width: 327,
    },
    ButtonModal:{
        width: 170,
        height: 70,
        justifyContent: "center",
        backgroundColor: '#95B8C4',
        opacity: 1,
        borderRadius:40,
    },
    textStyle:{
        color:'#041637',
        fontSize:18,
    },
    TextNome:{
        color:'#434343F2',
        fontSize:14,
        textAlign: 'center',
    }
})
