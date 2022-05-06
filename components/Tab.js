import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';

export default function Tab() {

    const able = Math.random() < 0.5;
    
    return (
        <TouchableWithoutFeedback>
                <View style={able ? styles.able: styles.disabled}>
                    <Text style={ able ? styles.text: styles.textdisabled}>12:00</Text>
                </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    able: {
        width: 83,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#B9B9B9F2',
        borderWidth: 2,
        backgroundColor: '#FAFCFF',
    },
    disabled:{
        width: 83,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#EDEDED',
    },
    text:{
        fontSize:18,
        color:'#B9B9B9F2',
    },
    textdisabled:{
        fontSize:18,
        color:'#FFFFFF',
    },
});