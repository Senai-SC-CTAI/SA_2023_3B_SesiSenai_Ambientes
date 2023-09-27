import React, { useState } from 'react';
import imageToAdd from "../../../assets/img.png";   
import { View, StyleSheet, Button, TextInput, TouchableOpacity, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';



export function Cadastro() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [accountType, setAccountType] = useState('');

    const handleCadastro = () => {
        // Verificar se o email atende aos requisitos
        if (email.endsWith('@estudante.sesisenai.org.br')) {
            setAccountType('estudante');
        } else if (email.endsWith('@edu.sesisc.org.br')) {
            setAccountType('professor');
        } else {
            alert('Email não válido.');
            return;
        }

        // Outras validações, como senha igual a confirmação de senha, etc.
        if (password !== confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        }

        navigation.navigate('Login');
    };
  
    return (
    <View style={styles.container}>
        <View style={styles.centralize}> 
            <img src={imageToAdd} style={styles.image} alt="Image" />
            <Text style={{fontSize: 25, marginBottom: 30}}>Cadastre-se</Text>
        </View>

    <View style={styles.centralize}> 
    <TextInput
                    placeholder="Email"
                    style={styles.Input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <TextInput
                    placeholder="Senha"
                    style={styles.Input}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <TextInput
                    placeholder="Confirmar Senha"
                    style={styles.Input}
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                />

        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
            <View style={styles.centralize}>
                <Text style={{fontSize: 18, color: '#fff'}}>Cadastrar</Text>
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
        width: 300,
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