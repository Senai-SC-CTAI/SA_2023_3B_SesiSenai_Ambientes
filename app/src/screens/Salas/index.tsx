import React from 'react';
import imageToAdd from "../../../assets/teachings.png";
import { View, StyleSheet, Button, TextInput, TouchableOpacity, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';



export function Salas() {
    const navigation = useNavigation();
  
    return (
    <View style={styles.container}>
    <View style={styles.centralize}>
    <img src={imageToAdd} style={{height:150, width:150}} alt="Image" />
    <Text style={{fontSize:20, marginTop: 20}}>Nenhuma sala disponível</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
    },
    centralize: {
        alignItems: 'center', 
        justifyContent: 'center',
    },
    Input: {
        backgroundColor: '#f8f4f4',
        color: '#000',
        width: 250,
        height: 45,
        fontSize: 20,
        margin: 12,
        padding: 10,
    },
    button: {
        backgroundColor: '#005caa',
        color: '#7bacd4',
        borderRadius: 6,
        width: 250,
        height: 45,
        fontSize: 20,
        margin: 12,
        padding: 10,
    }
})