import React, { useState } from 'react';
import imageToAdd from "../../../assets/img.png";
import { View, StyleSheet, TextInput, TouchableOpacity, Text} from 'react-native';
import axios from 'axios';

import { useNavigation } from '@react-navigation/native';

const logar = async (email, senha) => {
    try {
      const response = await axios.post('http://localhost:8090/api/login', {
        email: email,
        senha: senha,
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao autenticar usuário', error);
      alert('Erro ao autenticar usuário.');
    }
  };

export function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');    

    const handleLogin = async () => {
        const response = await logar(email, senha);
        if (response) {
            const userEmail = response.email;
            const userNome = response.nome;
            const userType = response.accountType; 
            const userId = response.id;
            navigation.navigate('Main', { userType, userEmail, userNome, userId }); 
            console.log(userId)
        } else {
            alert('Erro ao autenticar usuário.');
        }
    };

    const handleCadastro = () => {
        navigation.navigate('Cadastro',{showTabs: false}); 
    };

    const handleEsqueceuSenha = () => {
        navigation.navigate('EsqueceuSenha',{showTabs: false}); 
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
        borderWidth: 2,
        borderRadius: 3,
        borderColor: "#005caa",
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
