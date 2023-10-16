import React, { useState, useEffect } from 'react';
import imageToAdd from "../../../assets/people.png";
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

export function Pessoas() {
    const [pessoas, setPessoas] = useState([]); // Estado para armazenar a lista de pessoas

    // Simule o carregamento de algumas pessoas (você pode preenchê-las com os dados reais)
    useEffect(() => {
        setPessoas([
            { nome: 'João Silva', email: 'joao@example.com', foto: require('../../../assets/user.png') },
            { nome: 'Maria Souza', email: 'maria@example.com', foto: require('../../../assets/user.png') },
            // Adicione mais pessoas conforme necessário
        ]);
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {pessoas.length === 0 ? (
                    <View style={styles.centralize}>
                        <img src={imageToAdd} style={{height:150, width:150}} alt="Image" />
                        <Text style={styles.message}>Ainda não há nenhuma pessoa registrada</Text>
                    </View>
                ) : (
                    // Mapeie a lista de pessoas e exiba cada uma na tela
                    pessoas.map((pessoa, index) => (
                        <View key={index} style={styles.pessoaContainer}>
                            <Image source={pessoa.foto} style={styles.fotoPessoa} />
                            <Text style={styles.nomePessoa}>{pessoa.nome}</Text>
                            <Text style={styles.emailPessoa}>{pessoa.email}</Text>
                            {/* Outras informações da pessoa, se necessário */}
                        </View>
                    ))
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    centralize: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        flexGrow: 1,
    },
    message: {
        fontSize: 20,
    },
    pessoaContainer: {
        backgroundColor: '#005caa', // Cor de fundo para a pessoa
        margin: 10,
        borderRadius: 10, // Borda arredondada
        padding: 10,
        alignItems: 'center', // Centraliza o conteúdo horizontalmente
    },
    fotoPessoa: {
        width: 50,
        height: 50,
        borderRadius: 50, // Borda arredondada para a foto
    },
    nomePessoa: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    emailPessoa: {
        fontSize: 16,
        color: 'white',
    },
});

// Função para adicionar uma pessoa à lista (se necessário)
function adicionarPessoa(novaPessoa) {
    // Implemente a lógica para adicionar uma pessoa à lista de pessoas
}
