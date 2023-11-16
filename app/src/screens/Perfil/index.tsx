import React from 'react';
import imageToAdd from "../../../assets/user.png";
import { View, StyleSheet, Button, Text, TouchableOpacity, Image } from 'react-native';


import { useNavigation, useRoute } from '@react-navigation/native';

export function Perfil() {
    const route = useRoute();
    const navigation = useNavigation();
    const { userNome, userType, userEmail } = route.params;

    const handleLogout = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileBackground}>
                <View style={styles.blueBackground}>
                    <View style={styles.profileSection}>
                        <View style={styles.iconContainer}>
                            <Image source={imageToAdd} style={styles.icon} resizeMode="cover" />
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.name}>{userNome}</Text>
                            <Text style={styles.role}>{userType}</Text>
                            <Text style={styles.email}>{userEmail}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.buttonsSection}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Editar Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleLogout}>
                    <Text style={styles.buttonText}>Deslogar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
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
        borderRadius: 75,
        padding: 10,
        marginRight: 20,
    },
    icon: {
        width: 150,
        height: 150,
        borderRadius: 75,
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
        fontSize: 14,
        color: '#d0e1f9',
    },
    buttonsSection: {
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center', 
        justifyContent: 'center',
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
    buttonText: {
        fontSize: 18,
        color: '#fff',
    },
});
