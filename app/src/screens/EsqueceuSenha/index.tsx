import React from 'react';
import imageToAdd from "../../../assets/img.png";   
import { View, StyleSheet, Button, TextInput, TouchableOpacity, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function EsqueceuSenha() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
        <View style={styles.centralize}> 
            <img src={imageToAdd} style={styles.image} alt="Image" />
            <Text style={{fontSize: 20, marginBottom: 20}}>Insira seu Email para recuperar a senha</Text>
        </View>

    <View style={styles.centralize}> 
        <TextInput 
         placeholder="Email"
         style={styles.Input} />
        
        <TouchableOpacity style={styles.button}>
            <View style={styles.centralize}>
                <Text style={{fontSize: 18, color: '#fff'}}>Enviar Email</Text>
            </View> 
        </TouchableOpacity>
            <View style={styles.centralize}>    
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{fontSize: 18, color: '#000', marginTop: 20}}>Voltar</Text>
                </TouchableOpacity>
            </View> 
    </View>
        <View style={{marginBottom: 300}}> </View>
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
    image: {
        width: 200,
        marginBottom: 70,
        marginTop: 50,
    },
    Input: {
        backgroundColor: '#f8f4f4',
        color: '#000',
        width: 250,
        height: 45,
        fontSize: 20,
        margin: 12,
        padding: 10,
        borderWidth: 2,
        borderRadius: 3,
        borderColor: "#005caa",
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