    import React, { useState, useEffect } from 'react';
    import { Alert, TextInput, Modal, View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
    import imageToAdd from "../../../assets/calendar-clock.png";
    import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';

    export function Reservas() {
        const route = useRoute();
        const navigation = useNavigation();
        const [reservas, setReservas] = useState([]);
        const [modalVisible, setModalVisible] = useState(false);
        const [reservaEditando, setReservaEditando] = useState(null);
        const [motivo, setMotivo] = useState('');
        const [data, setData] = useState('');
        const [hora, setHora] = useState('');
        const { userEmail, userNome } = route.params;
    
        useFocusEffect(
            React.useCallback(() => {
                fetch(`http://localhost:8090/reserva?userEmail=${userEmail}`)
                    .then(response => response.json())
                    .then(data => setReservas(data))
                    .catch(error => console.error(error));
            }, [])
        );
    
        const handleOpenModal = (reserva) => {
            setMotivo(reserva.motivo);
            setData(reserva.data);
            setHora(reserva.hora);
            setReservaEditando(reserva);
            setModalVisible(true);
        };
    
        const handleCloseModal = () => {
            setModalVisible(false);
        };
    
        const handleEditSubmit = async () => {
            const response = await fetch(`http://localhost:8090/reserva/${reservaEditando.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userNome: userNome,
                    motivo: motivo,
                    data: data,
                    hora: hora,
                }),
            });
    
            if (response.ok) {
                const updatedReserva = await response.json();
                setReservas(reservas.map(reserva => reserva.id === updatedReserva.id ? updatedReserva : reserva));
                setReservaEditando(null);
                setModalVisible(false);
            } else {
                console.error('Erro ao editar a reserva');
            }
        };
    
        const handleCancel = (reserva) => {
            console.log('handleCancel chamado', reserva);
            fetch(`http://localhost:8090/reserva/${reserva.id}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (response.ok) {
                    setReservas(reservas.filter(r => r.id !== reserva.id));
                } else {
                    console.error('Erro ao cancelar a reserva');
                }
            })
            .catch(error => console.error(error));
        };  
    
        return (
            <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {reservas.length === 0 ? (
                    <View style={styles.centralize}>
                        <img src={imageToAdd} style={{height:150, marginTop: 50, width:150}} alt="Image" />
                        <Text style={styles.message}>Você não possui nenhuma reserva</Text>
                    </View>
                ) : (
                    reservas.map((reserva, index) => (
                        <View key={index} style={styles.reservaContainer}>
                            <Text style={styles.nomeAmbiente}>{reserva.ambiente.nome}</Text>
                            <Text style={styles.dataHorario}>{`Data: ${reserva.data}, Horário: ${reserva.hora.slice(0,5)}`}</Text>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button}  onPress={() => handleOpenModal(reserva)}>
                                    <View style={styles.centralize}>
                                        <Text style={{fontSize: 18, color: '#fff'}}>Editar</Text>
                                    </View> 
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonCancelar} onPress={() => handleCancel(reserva)}>
                                    <View style={styles.centralize}>
                                        <Text style={{fontSize: 18, color: '#fff'}}>Cancelar</Text>
                                    </View> 
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                )}
            </ScrollView>
    
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Editar Reserva</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Dia (ANO-MÊS-DIA)"
                            onChangeText={text => setData(text)}
                            value={data}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Horário (HORA:MINU)"
                            onChangeText={text => setHora(text)}
                            value={hora}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Motivo"
                            onChangeText={text => setMotivo(text)}
                            value={motivo}
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button2} onPress={handleEditSubmit}>
                                <Text style={{fontSize: 16, color: '#fff'}}>Salvar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonFechar} onPress={handleCloseModal}>
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
        backgroundColor: "white",
    },
    centralize: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        flexGrow: 1,
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    message: {
        fontSize: 20,
        marginTop: 10,
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
    },
    button2: {
        backgroundColor: '#005caa',
        color: '#7bacd4',
        borderRadius: 6,
        width: 100,
        height: 40,
        fontSize: 20,
        padding: 10,
    },
    buttonFechar: {
        backgroundColor: '#ef4444',
        color: '#7bacd4',
        borderRadius: 6,
        fontSize: 20,
        width: 90,
        height: 40,
        marginLeft: 10,
        alignItems: 'center', 
        textAlign: 'center',
        justifyContent: 'center',
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
    
});

