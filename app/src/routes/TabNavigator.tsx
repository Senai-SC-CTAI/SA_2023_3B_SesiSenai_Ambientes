import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ambientes } from '../screens/Ambientes';
import { Reservas } from '../screens/Reservas';
import { Perfil } from '../screens/Perfil';
import { Pessoas } from '../screens/Pessoas';
import { Salas } from '../screens/Salas';
import { EditarPerfil } from '../screens/EditarPerfil';


const Tab = createMaterialTopTabNavigator();
export function TabNavigator({ route }) {
    const userType = route?.params?.userType || 'estudante';  
    const showTabs = route?.params?.showTabs || false;
    const userEmail = route?.params?.userEmail;
    const userNome = route?.params?.userNome;
    const userId = route?.params?.userId;

    return (
        <Tab.Navigator>
            {(userType === 'estudante' || userType === 'coordination') && <Tab.Screen name="Salas" component={Salas} />}
            {(userType === 'professor' || userType === 'coordenacao') && <Tab.Screen name="Ambientes" initialParams={{ userId, userNome, userEmail}} component={Ambientes} />}
            {(userType === 'professor' || userType === 'coordenacao') && <Tab.Screen name="Reservas" initialParams={{ userId, userNome, userEmail}} component={Reservas} />}
            {userType === 'coordenacao' && <Tab.Screen name="Pessoas" component={Pessoas} />}
            {userType === '???' && <Tab.Screen name="EditarPerfil" component={EditarPerfil} />}
            <Tab.Screen name="Perfil" component={Perfil} initialParams={{ userNome, userEmail, userType, userId }} />
        </Tab.Navigator>
    );
}

