import React, { useState } from 'react';
import imageToAdd from "../../../assets/img.png";   
import { View, StyleSheet,TextInput, TouchableOpacity, Text} from 'react-native';
import axios from 'axios';


import { useNavigation } from '@react-navigation/native';


export function Cadastro() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [accountType, setAccountType] = useState('');

    const handleEmailChange = (text) => {
        setEmail(text);
        
        if (text.endsWith('@estudante.sesisenai.org.br')) {
            setAccountType('estudante');
        } else if (text.endsWith('@edu.sesisc.org.br')) {
            setAccountType('professor');
        } else if (text.endsWith('@sc.senai.br')) {
            setAccountType('coordenacao');
        } else {
            setAccountType('');
        }
    };

    const handleCadastro = async () => {
        if (senha !== confirmSenha) {
            alert('As senhas não coincidem.');
            return;
        }

        if (accountType == '') {
            alert('Você não está usando um email institucional');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8090/usuario', {
                nome,    
                email,
                senha,
                accountType
            });

            if (response.status === 200) {
                navigation.navigate('Login');
            } else {
                alert('Erro ao criar usuário.');
            }
        } catch (error) {
            console.error('Erro ao criar usuário', error);
        }
    };
  
    return (
    <View style={styles.container}>
        <View style={styles.centralize}> 
            <img src={imageToAdd} style={styles.image} alt="Image" />
            <Text style={{fontSize: 23, marginBottom: 10}}>Cadastre-se</Text>
        </View>

    <View style={styles.centralize}> 
    <TextInput
                    placeholder="Nome"
                    style={styles.Input}
                    value={nome}
                    onChangeText={(text) => setNome(text)}
                />
    <TextInput
                    placeholder="Email"
                    style={styles.Input}
                    value={email}
                    onChangeText={handleEmailChange}
                />

                <TextInput
                    placeholder="Senha"
                    style={styles.Input}
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={(text) => setSenha(text)}
                />

                <TextInput
                    placeholder="Confirmar Senha"
                    style={styles.Input}
                    secureTextEntry={true}
                    value={confirmSenha}
                    onChangeText={(text) => setConfirmSenha(text)}
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