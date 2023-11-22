import React, { useState, useEffect } from 'react';
import imageToAdd from "../../../assets/calendar-clock.png";
import { View, StyleSheet, Text, ScrollView } from 'react-native';

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
});

