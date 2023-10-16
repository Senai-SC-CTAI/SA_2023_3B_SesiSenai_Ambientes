import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function TelaDeCriacaoDeAmbiente({ route }) {
    const { adicionarAmbiente } = route.params;
    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState(null);
    const navigation = useNavigation();

    const handleConfirmar = () => {
        if (nome && imagem) {
            // Crie um novo ambiente com nome e imagem
            const novoAmbiente = { nome, imagem };

            // Chame a função para adicionar o ambiente à lista
            adicionarAmbiente(novoAmbiente);

            // Volte para a tela de Ambientes
            navigation.goBack();
        } else {
            // Lógica para lidar com campos em branco ou imagem ausente
        }
    };

    return (
        <View style={styles.container}>
            <Text>Nome do Ambiente:</Text>
            <TextInput
                value={nome}
                onChangeText={text => setNome(text)}
            />
            <Text>Imagem do Ambiente:</Text>
            {/* Componente de seleção de imagem (implementação depende da biblioteca que você está usando) */}
            {/* Lógica para selecionar uma imagem e atualizar o estado "imagem" */}

            <Button title="Confirmar" onPress={handleConfirmar} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    // Defina outros estilos aqui conforme necessário
});
