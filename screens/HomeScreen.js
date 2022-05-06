import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import {SimpleLineIcons} from '@expo/vector-icons'

import Cards from '../components/Cards';

export default function HomeScreen({navigation}) {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#95B8C4"/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.containerTop}>
                    <View style={styles.containerText}>
                        <Text style={styles.TextTitle}>Olá, </Text>
                        <Text style={styles.Text}>Onde será seu atendimento hoje?</Text>
                    </View>
                    <View style={styles.address}>
                        <Text style={styles.Text}>Avenida Miguel Castro, 600</Text>
                        <View style={styles.Icon}>
                            <SimpleLineIcons name={'arrow-right'} size={25} color={'#FFFFFF'}/>
                        </View>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrolltop}>
                        <View>
                            <Image style={styles.cardtop} source={require('../assets/img/Mask1.png')}/>
                        </View>
                        <View>
                            <Image style={styles.cardtop} source={require('../assets/img/Mask2.png')}/>
                        </View>
                        <View>
                            <Image style={styles.cardtop} source={require('../assets/img/Mask2.png')}/>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.scroll}>
                    <Text style={styles.categoria}>Unhas</Text>
                    <Cards navigation={navigation}/>
                    <Text style={styles.categoria}>Cabelo</Text>
                    <Cards navigation={navigation}/>
                    <Text style={styles.categoria}>Depilação</Text>
                    <Cards navigation={navigation}/>
                    <Text style={styles.categoria}>Massagem</Text>
                    <Cards navigation={navigation}/>
                </View>
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
        alignItems:'center',
        justifyContent: 'center',
        flexDirection:'row',
    },
    Icon:{
        paddingLeft:50,
    },
    scrolltop:{
        position: 'absolute',
        height: 218,
        top: 200,
        flexDirection:'row',
    },
    cardtop:{
        borderRadius: 25,
    },
    categoria:{
        fontSize: 18,
        color: '#434343F2',
        paddingLeft:23,
    },
    scroll:{
        top: 60,
    }
});