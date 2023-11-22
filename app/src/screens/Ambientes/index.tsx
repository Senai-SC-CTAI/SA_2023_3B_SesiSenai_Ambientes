import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, TextInput, Modal} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

export function Ambientes() {
    const route = useRoute();
    const navigation = useNavigation();
    const [ambientes, setAmbientes] = useState([]);
    const [dia, setDia] = useState('');
    const [horario, setHorario] = useState('');
    const [motivo, setMotivo] = useState('');
    const { userEmail, userNome } = route.params;

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
            userEmail: userEmail, 
            userNome: userNome, 
            ambiente: { id: currentAmbiente.id },
            motivo: motivo,
            data: dia,
            hora: horario
        };
        console.log(reserva)
        
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
                    <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10,}}> 
                    <TouchableOpacity style={styles.button} onPress={() => handleReserve(ambiente)} >
                    <Text style={{fontSize: 16, color: '#fff'}}>Reservar</Text>
                    </TouchableOpacity>
                    </View>
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
                    placeholder="Dia (ANO-MÊS-DIA)"
                    onChangeText={text => setDia(text)}
                    value={dia}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Horário (HORA:MINU)"
                    onChangeText={text => setHorario(text)}
                    value={horario}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Motivo"
                    onChangeText={text => setMotivo(text)}
                    value={motivo}
                />
                  <View style={styles.buttonContainer}>

                <TouchableOpacity style={styles.button} onPress={handleReserveSubmit}>
                <Text style={{fontSize: 16, color: '#fff'}}>Reservar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonFechar} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{fontSize: 16, color: '#fff'}}>Fechar</Text>
                </TouchableOpacity>
                </View>
                </View>
            </View>
        </Modal>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f4f4',
    },
    textoVazio: {
        textAlign: 'center',
        color: '#000',
        fontSize: 20,
        marginTop: 20,
    },
    button: {
        backgroundColor: '#005caa',
        color: '#7bacd4',
        borderRadius: 6,
        fontSize: 20,
        width: 90,
        height: 40,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    buttonFechar: {
        backgroundColor: '#ef4444',
        color: '#7bacd4',
        borderRadius: 6,
        fontSize: 20,
        width: 90,
        height: 40,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        width: '80%',
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
        fontSize: 24,
        fontWeight: 'bold',
    },
    item: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: '#005caa',
        borderWidth: 2,
        padding: 20,
        marginBottom: 30,
    },
    nome: {
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    descricao: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
});
