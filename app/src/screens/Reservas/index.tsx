import React, { useState, useEffect } from 'react';
import { Alert, Button, View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import imageToAdd from "../../../assets/calendar-clock.png";
import { useNavigation, useRoute } from '@react-navigation/native';

export function Reservas() {
    const route = useRoute();
    const navigation = useNavigation();
    const [reservas, setReservas] = useState([]);
    const { userEmail, userNome } = route.params;

    useEffect(() => {
        fetch(`http://localhost:8090/reserva?userEmail=${userEmail}`)
            .then(response => response.json())
            .then(data => setReservas(data))
            .catch(error => console.error(error));
    }, []);

    const handleEdit = (reserva) => {
        // Abra o modal aqui com os detalhes da reserva para edição
    };

    const handleCancel = (reserva) => {
        Alert.alert(
            "Cancelar Reserva",
            "Tem certeza de que deseja cancelar esta reserva?",
            [
                { text: "Não", style: "cancel" },
                { text: "Sim", onPress: () => {
                    // Faça a chamada para a API para cancelar a reserva aqui
                }}
            ]
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {reservas.length === 0 ? (
                    <View style={styles.centralize}>
                        <img src={imageToAdd} style={{height:150, width:150}} alt="Image" />
                        <Text style={styles.message}>Você não possui nenhuma reserva</Text>
                    </View>
                ) : (
                    reservas.map((reserva, index) => (
                        <View key={index} style={styles.reservaContainer}>
                            <Text style={styles.nomeAmbiente}>{reserva.ambiente.nome}</Text>
                            <Text style={styles.dataHorario}>{`Data: ${reserva.data}, Horário: ${reserva.hora.slice(0,5)}`}</Text>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button}>
                                    <View style={styles.centralize}>
                                        <Text style={{fontSize: 18, color: '#fff'}}>Editar</Text>
                                    </View> 
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonCancelar}>
                                    <View style={styles.centralize}>
                                        <Text style={{fontSize: 18, color: '#fff'}}>Cancelar</Text>
                                    </View> 
                                </TouchableOpacity>
                            </View>
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
    reservaContainer: {
        backgroundColor: '#f8f4f4', 
        borderRadius: 10,
        borderColor: '#005caa',
        margin: 10,
        alignItems: 'center', 
        justifyContent: 'center',
        borderWidth: 2,
        padding: 10,
    },
    nomeAmbiente: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    dataHorario: {
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonCancelar: {
        backgroundColor: '#ef4444',
        borderRadius: 6,
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    button: {
        backgroundColor: '#005caa',
        color: '#7bacd4',
        borderRadius: 6,
        width: 100,
        height: 40,
        fontSize: 20,
        margin: 10,
        padding: 10,
    }
    
});

