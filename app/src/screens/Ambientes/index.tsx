import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import imageToAdd from "../../../assets/paper-plane.png";
import imageToAdd2 from "../../../assets/add-button.png";
import { useNavigation } from '@react-navigation/native';

export function Ambientes() {
    const navigation = useNavigation();

    const handleAdicionar = () => {
        // Aqui você pode adicionar a lógica para navegar para a tela de criação de ambiente
        // navigation.navigate('TelaDeCriacaoDeAmbiente');
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.centralize}>
                    <Image source={imageToAdd} style={styles.image} />
                    <Text style={styles.message}>Não há Ambientes criados</Text>
                </View>
                {/* ... seu conteúdo da tela de ambientes ... */}
            </ScrollView>
            
            {/* Botão flutuante para adicionar */}
            <TouchableOpacity style={styles.addButton} onPress={handleAdicionar}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
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
        flexGrow: 1, // Permite que o conteúdo cresça verticalmente
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
    },
    message: {
        fontSize: 20,
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#005caa',
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
    addButtonText: {
        color: 'white',
        fontSize: 30,
    },
})