import React, { useState, useEffect } from 'react';
import imageToAdd from "../../../assets/calendar-clock.png";
import { View, StyleSheet, Text, ScrollView } from 'react-native';

export function Reservas() {
    const [reservas, setReservas] = useState([]); // Estado para armazenar a lista de reservas

    // Simule a criação de algumas reservas (você pode preenchê-las com os dados reais)
    useEffect(() => {
        setReservas([
            { nomeAmbiente: 'Sala de Reunião', data: '2023-10-16', horario: '10:00 - 11:00' },
            { nomeAmbiente: 'Laboratório', data: '2023-10-16', horario: '13:00 - 14:00' },
            // Adicione mais reservas conforme necessário
        ]);
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
                    // Mapeie a lista de reservas e exiba cada uma na tela
                    reservas.map((reserva, index) => (
                        <View key={index} style={styles.reservaContainer}>
                            <Text style={styles.nomeAmbiente}>{reserva.nomeAmbiente}</Text>
                            <Text style={styles.dataHorario}>{`Data: ${reserva.data}, Horário: ${reserva.horario}`}</Text>
                            {/* Outras informações da reserva, se necessário */}
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
        backgroundColor: '#f8f4f4', // Cor de fundo para a reserva
        margin: 10,
        borderRadius: 10, // Borda arredondada
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

// Função para adicionar uma reserva à lista (se necessário)
function adicionarReserva(novaReserva) {
    // Implemente a lógica para adicionar uma reserva à lista de reservas
}
