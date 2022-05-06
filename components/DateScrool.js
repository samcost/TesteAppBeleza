import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, FlatList, Pressable} from 'react-native';

import horarios from '../assets/data/horarios';

export default function DateScrool() {


    function renderItem({item}){

        return (<View>
                    <Pressable style={styles.disabled}>
                        <Text style={styles.text}>{item.hora}</Text>
                    </Pressable>
            </View>
        );
    }

    return(
        <View>
            <FlatList
                data = {horarios}
                renderItem = {renderItem}
                keyExtractor= {item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
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
        margin:10,
    },
    disabled:{
        width: 83,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin:10,
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