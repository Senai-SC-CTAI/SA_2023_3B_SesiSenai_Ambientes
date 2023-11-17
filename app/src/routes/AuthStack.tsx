// AuthStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Login';
import { Cadastro } from '../screens/Cadastro';
import { EsqueceuSenha } from '../screens/EsqueceuSenha';
import { Pessoas } from '../screens/Pessoas';
import { TabNavigator } from './TabNavigator'; 


const Stack = createStackNavigator();

export function AuthStack() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
            <Stack.Screen name="Pessoas" component={Pessoas} />
            <Stack.Screen
                name="Main"
                component={TabNavigator}
                options={{ headerShown: false }} 
            />
        </Stack.Navigator>
    );
}
