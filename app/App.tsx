// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigator } from './src/routes/TabNavigator'; // Importe o TabNavigator
import { Login } from './src/screens/Login/index';
import { Cadastro } from './src/screens/Cadastro'; // Importe a tela de login

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }} // Esconda o cabeçalho do stack na tela de login
                />
                <Stack.Screen
                    name="Main" // Nome da tela após o login
                    component={TabNavigator}
                    options={{ headerShown: false }} // Esconda o cabeçalho do stack na tela principal
                />
                <Stack.Screen 
                name="Cadastro"
                component={Cadastro}
                options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
