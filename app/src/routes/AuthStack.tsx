// AuthStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Login';
import { Cadastro } from '../screens/Cadastro';
import { EsqueceuSenha } from '../screens/EsqueceuSenha';
import { Salas } from '../screens/Salas'
import { Pessoas } from '../screens/Pessoas';
import { TabNavigator } from './TabNavigator'; // Importe o TabNavigator


const Stack = createStackNavigator();

export function AuthStack() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
            <Stack.Screen name="Pessoas" component={Pessoas} />
            <Stack.Screen name="Salas" component={Salas} />
            <Stack.Screen
                name="Main" // Nome da tela após o login
                component={TabNavigator}
                options={{ headerShown: false }} // Esconda o cabeçalho do stack
            />
        </Stack.Navigator>
    );
}
