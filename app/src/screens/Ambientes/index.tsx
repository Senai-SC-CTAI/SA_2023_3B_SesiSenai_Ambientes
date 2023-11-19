import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button, TextInput, Modal} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

export function Ambientes() {
    const route = useRoute();
    const navigation = useNavigation();
    const [ambientes, setAmbientes] = useState([]);
    const [dia, setDia] = useState('');
    const [horario, setHorario] = useState('');
    const [motivo, setMotivo] = useState('');
    const { userId } = route.params;


    useEffect(() => {
        fetch('http://localhost:8090/ambiente')
            .then(response => response.json())
            .then(data => setAmbientes(data));
    }, []);
  
    const [modalVisible, setModalVisible] = useState(false);
    const [currentAmbiente, setCurrentAmbiente] = useState(null);
    
    const handleReserve = (ambiente) => {
        setCurrentAmbiente(ambiente);
        setModalVisible(true);
    };

    const handleReserveSubmit = () => {
        const reserva = {
            usuario: { id: userId }, 
            ambiente: { id: currentAmbiente.id },
            motivo: motivo,
            data: dia,
            hora: horario
        };
        
        fetch(`http://localhost:8090/usuario/${userId}`)
        .then(response => response.json())
        .then(usuario => {
            const reserva = {
                usuario: usuario, 
                ambiente: { id: currentAmbiente.id },
                motivo: motivo,
                data: dia,
                hora: horario
            };
        
            fetch('http://localhost:8090/reserva', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reserva)
            }).then(response => {
                if (response.ok) {
                    alert('Reserva feita com sucesso!');
                    setModalVisible(false);
                } else {
                    alert('Erro ao fazer reserva.');
                }
            });
        });
    };
    
    return (
        <View style={styles.container}>
            {ambientes.length === 0 ? (
                <Text style={styles.textoVazio}>Ainda não há nenhum ambiente</Text>
            ) : (
                ambientes.map((ambiente, index) => (
                    <View key={index} style={styles.item}>
                        <Text style={styles.nome}>{ambiente.nome}</Text>
                        <Text style={styles.descricao}>{ambiente.descricao}</Text>
                        <Button title="Reservar" onPress={() => handleReserve(ambiente)} />
                    </View>
                ))
            )}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <Text style={styles.modalText}>Reservar {currentAmbiente?.nome}</Text>
                    <TextInput
    style={styles.input}
    placeholder="Dia (yyyy-MM-dd)"
    onChangeText={text => setDia(text)}
    value={dia}
/>
<TextInput
    style={styles.input}
    placeholder="Horário (HH:mm)"
    onChangeText={text => setHorario(text)}
    value={horario}
/>
    <TextInput
    style={styles.input}
    placeholder="Motivo"
    onChangeText={text => setMotivo(text)}
    value={motivo}
        />
        <Button
         title="Reservar"
         onPress={handleReserveSubmit}
        />
        <Button
            title="Fechar"
            onPress={() => setModalVisible(!modalVisible)}
        />
             </View>
        </View>
    </Modal>
</View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    textoVazio: {
        textAlign: 'center',
        color: '#333',
        fontSize: 18,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)', // Isso adiciona um fundo escuro semi-transparente
    },
    modalView: {
        width: '80%', // Isso garante que o modal tenha 80% da largura da tela
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
    },
    item: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    nome: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    descricao: {
        fontSize: 16,
        color: '#666',
    },
});