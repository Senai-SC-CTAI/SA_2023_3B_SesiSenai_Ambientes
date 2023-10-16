import React, { useState } from 'react';
import imageToAdd from "../../../assets/img.png";
import { simulateAuthentication } from '../../components/Authenticate/index';
import { View, StyleSheet, Button, TextInput, TouchableOpacity, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState(''); // Defina email como um estado inicial vazio
    const [password, setPassword] = useState(''); // Defina password como um estado inicial vazio

    const handleLogin = async () => {
        navigation.navigate('Main', { showTabs: true});
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
      <Text style={{fontSize: 25, marginBottom: 30}}>Faça seu Login</Text>
    </View>

    <View style={styles.centralize}> 
         <TextInput
            placeholder="Email"
            style={styles.Input}
            value={email}
            onChangeText={(text) => setEmail(text)} // Atualize o estado do email
             />

         <TextInput
            placeholder="Senha"
            style={styles.Input}
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)} // Atualize o estado da senha
            />
        
        <View>
            <TouchableOpacity onPress={handleEsqueceuSenha}>
                <Text>Esqueceu a Senha?</Text>
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
