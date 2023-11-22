import React, { useState, useEffect } from 'react';
import { Alert, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export function Perfil() {
    const route = useRoute();
    const navigation = useNavigation();
    const { userNome, userType, userEmail, userId } = route.params;
    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState(userNome);
    const [editedEmail, setEditedEmail] = useState(userEmail);
    const [editedSenha, setEditedSenha] = useState('');
    const [user, setUser] = useState({ userNome, userType, userEmail, userId });

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        const response = await fetch(`http://localhost:8090/usuario/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: editedNome,
                email: editedEmail,
                senha: editedSenha,
            }),
        });
    
        if (response.ok) {
            const updatedUser = await response.json();
            setUser(updatedUser);
            setIsEditing(false);
        } else {
            alert('Erro ao salvar usuário');
        }
    };

    const handleLogout = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    };

    const handleDelete = () => {
        Alert.alert(
            "Excluir Conta",
            "Tem certeza de que deseja deletar sua conta?",
            [
                { text: "Não", style: "cancel" },
                { text: "Sim", onPress: async () => {
                    const response = await fetch(`http://localhost:8090/usuario/delete?email=${userEmail}`, {
                        method: 'DELETE',
                    });
                    if (response.ok) {
                        handleLogout();
                    } else {
                        console.error('Erro ao deletar a conta');
                    }
                }}
            ]
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileBackground}>
                <View style={styles.blueBackground}>
                    <View style={styles.profileSection}>
                        <View style={[styles.iconContainer, {backgroundColor: "#037bfc"}]}>
                            <Text style={styles.icon}>{user.userNome.slice(0,2).toUpperCase()}</Text>
                        </View>
                        <View style={styles.infoContainer}> 
                            <Text style={styles.name}>{user.userNome}</Text>
                            <Text style={styles.role}>{user.userType}</Text>
                            <Text style={styles.email}>{user.userEmail}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.buttonsSection}>
                <TouchableOpacity style={styles.button} onPress={handleEdit}>
                    <Text style={styles.buttonText}>Editar Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleLogout}>
                    <Text style={styles.buttonText}>Deslogar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonExcluir} onPress={handleDelete}>
                    <Text style={styles.buttonText}>Excluir Perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    profileBackground: {
        backgroundColor: '#005caa',
        width: '100%',
    },
    blueBackground: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#00357e',
        paddingBottom: 20,
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    icon: {
        color: 'white',
        fontSize: 20,
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    role: {
        fontSize: 16,
        color: '#EEEEEE',
    },
    email: {
        fontSize: 12,
        color: '#d0e1f9',
    },
    buttonsSection: {
        paddingTop: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#005caa',
        borderRadius: 6,
        height: 45,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    buttonExcluir: {
        backgroundColor: '#ef4444',
        borderRadius: 6,
        height: 45,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    },
});
