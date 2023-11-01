import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import imageToAdd from "../../../assets/paper-plane.png";
import { useNavigation } from '@react-navigation/native';

export function Ambientes() {
    const navigation = useNavigation();
    const [ambientes, setAmbientes] = useState([]);

 useEffect(() => {
    setAmbientes([
        { nome: 'Sala de Reunião', imagem: require('../../../assets/reuniao.png') },
        { nome: 'Laboratório', imagem: require('../../../assets/laboratorio.png') },
    ]);
}, []);

return (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
            {ambientes.length === 0 ? (
                <View style={styles.centralize}>
                    <img src={imageToAdd} style={styles.image} />
                    <Text style={styles.message}>Não há Ambientes criados</Text>
                </View>
            ) : (
                // Mapeie a lista de ambientes e exiba cada um na tela
                ambientes.map((ambiente, index) => (
                    <View key={index} style={styles.ambienteContainer}>
                        <Text style={styles.ambienteName}>{ambiente.nome}</Text>
                        <View style={styles.ambienteContent}>
                          <img src={ambiente.imagem} style={styles.ambienteImage} />
                        </View>
                        <TouchableOpacity style={styles.reservarButton} onPress={() => reservarAmbiente(ambiente)}>
                            <Text style={styles.reservarButtonText}>Reservar</Text>
                        </TouchableOpacity>
                           <TouchableOpacity style={styles.reservarButton} onPress={() => reservarAmbiente(ambiente)}>
                            <Text style={styles.reservarButtonText}>Informações</Text>
                        </TouchableOpacity>
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
    image: {
        height: 150,
        width: 150,
        marginBottom: 20,
    },
    contentContainer: {
        flexGrow: 1,
    },
    ambienteContainer: {
        backgroundColor: '#f8f4f4', // Cor de fundo para o quadrado
        margin: 10,
        borderRadius: 10, // Borda arredondada
        overflow: 'hidden', // Para cortar qualquer conteúdo que saia dos limites
    },
    ambienteContent: {
        alignItems: 'center',
        paddingTop: 10,
    },
    ambienteImage: {
        width: '100%',
        height: '100%',
    },
    ambienteName: {
        fontSize: 18,
        marginTop: 5,
        alignSelf: 'center'
    },
    reservarButton: {
        backgroundColor: '#005caa',
        padding: 10,
        marginTop: 2,
    },
    reservarButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    message: {
        fontSize: 20,
    },
});