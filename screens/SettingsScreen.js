import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import Constants from 'expo-constants';


export default function SettingsScreen({navigation}) {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FAFCFF"/>
            <Text style={styles.text}>Configurações</Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('AddCard')}>
                <View style={styles.address}>
                    <Text style={styles.text}>Adicionar Endereço</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('AddCard')}>
                <View style={styles.address}>
                    <Text style={styles.text}>Adicionar Cartão</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        opacity: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#FAFCFF',
        paddingTop:20,
        paddingLeft:20,
    },
    address:{
        width: 327,
        height: 50,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: '#95B8C4',
        backgroundColor: '#FFFFFF',
        opacity: 1,
        margin:10,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize: 24,
        color: '#95B8C4',
    }
});