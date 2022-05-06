import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';

export default function ButtonPrimary({navigation}) {
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Entrar')}>
            <View style={styles.container}>
                <Text style={styles.TextButton}>Entrar</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
  container: {
    width: 295,
    height: 70,
    justifyContent: "center",
    backgroundColor: '#95B8C4',
    opacity: 1,
    borderRadius:40,
    marginTop:20,
  },
  TextButton: {
    textAlign: 'center',
    fontSize: 24,
    letterSpacing: 0,
    fontSize:14,
    color: '#FFFFFF',
    opacity: 1,
  },
});