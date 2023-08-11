import React from 'react';
import imageToAdd from "../../../assets/img.png";
import { View, StyleSheet, Button, TextInput, TouchableOpacity, Text} from 'react-native';
import { Link } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';



export function Login() {
    const navigation = useNavigation();
    
    return (
    <View style={styles.container}>

    <View style={styles.centralize}> 
      <img src={imageToAdd} style={styles.image} alt="Image" />
      <Text style={{fontSize: 25, marginBottom: 30}}>Faça seu Login</Text>
    </View>

    <View style={styles.centralize}> 
        <TextInput 
         placeholder="Email"
         style={styles.Input} />
        
        <TextInput
        placeholder="Senha"
        style={styles.Input}/>  
        
        <View>
        <Text>Esqueceu a Senha?</Text>
        </View>

        <TouchableOpacity style={styles.button}>
            <View style={styles.centralize}>
            <Link to={{ screen: 'Ambientes'}}>
             <Text style={{fontSize: 18, color: '#fff'}}>Login</Text>
             </Link>
            </View> 
        </TouchableOpacity>
        <Text style={{marginTop: 50}}>Ainda não tem uma conta?</Text>
        <TouchableOpacity style={styles.button}>
            <View style={styles.centralize}>
            <Link to={{ screen: 'Cadastro'}}>
             <Text style={{fontSize: 18, color: '#fff'}}>Criar Conta</Text>
             </Link>
            </View> 
        </TouchableOpacity>
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
        width: 300,
    },
    login: {

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