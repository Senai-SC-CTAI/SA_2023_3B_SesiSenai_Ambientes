import React, { useState, useEffect } from 'react';
import imageToAdd from "../../../assets/img.png";
import { View, StyleSheet, Button, TextInput, TouchableOpacity, Text} from 'react-native';
import axios from 'axios';

import { useNavigation } from '@react-navigation/native';

export function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async () => {

        if (!email || !senha) {
            alert('Por favor, preencha os campos de e-mail e senha.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8090/usuario', {
                email,
                senha
            });

            if (response.status === 200) {
                const userType = response.data.accountType; // Aqui estamos pegando o accountType do response
                navigation.navigate('Main', { userType }); // Passe o tipo de usuário como um 
            } else {
                alert('Erro ao autenticar usuário.');
            }
        } catch (error) {
            console.error('Erro ao autenticar usuário', error);
        }
    };

    const handleCadastro = () => {
        navigation.navigate('Cadastro',{showTabs: false}); // Navegar para a tela de cadastro
    };

    const handleEsqueceuSenha = () => {
        navigation.navigate('EsqueceuSenha',{showTabs: false}); // Navegar para a tela de cadastro
    };


    return (
    <View style={styles.container}>

    <View style={styles.centralize}> 
      <img src={imageToAdd} style={styles.image} alt="Image" />
      <Text style={{fontSize: 23, marginBottom: 10}}>Faça seu Login</Text>
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
            value={senha}
            onChangeText={(text) => setSenha(text)} 
            />
        
        <View>
            <TouchableOpacity onPress={handleEsqueceuSenha}>
                <Text style={{color:'#0980db'}}>Esqueceu a Senha?</Text>
            </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <View style={styles.centralize}>
                <Text style={{fontSize: 18, color: '#fff'}}>Login</Text>
            </View> 
        </TouchableOpacity>
        <Text style={{marginTop: 20}}>Ainda não tem uma conta?</Text>
             <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                 <View style={styles.centralize}>
             <Text style={{fontSize: 18, color: '#fff'}}>Criar Conta</Text>
       </View> 
        </TouchableOpacity>
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
    image: {
        width: 200,
        marginBottom: 20,
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
