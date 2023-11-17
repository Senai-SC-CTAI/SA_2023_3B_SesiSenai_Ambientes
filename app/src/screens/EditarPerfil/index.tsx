import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';

import { useNavigation } from '@react-navigation/native';

const editarNome = async (email, novoNome) => {
    try {
        const response = await axios.put('http://localhost:8090/api/editarPerfil', {
            email: email,
            nome: novoNome,
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao editar perfil do usuário', error);
        alert('Erro ao editar perfil do usuário.');
    }
};

export function EditarPerfil({ route }) {
    const { userEmail, userNome } = route.params;
    const [novoNome, setNovoNome] = useState(userNome);

    const handleEditarPerfil = async () => {
        const response = await editarNome(userEmail, novoNome);
        if (response) {
            alert('Perfil editado com sucesso.');
        } else {
            alert('Erro ao editar perfil do usuário.');
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Novo nome"
                value={novoNome}
                onChangeText={(text) => setNovoNome(text)}
            />
            <TouchableOpacity onPress={handleEditarPerfil}>
                <Text>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}
