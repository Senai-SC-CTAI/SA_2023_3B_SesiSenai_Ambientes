import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ambientes } from '../screens/Ambientes';
import { Reservas } from '../screens/Reservas';
import { Perfil } from '../screens/Perfil';
import { Pessoas } from '../screens/Pessoas';
import { Salas } from '../screens/Salas';
import { TelaDeCriacaoDeAmbiente } from '../screens/TelaDeCriacaoDeAmbiente';

const Tab = createMaterialTopTabNavigator();
export function TabNavigator({ route }) {
    const userType = route?.params?.userType || 'aluno';  
    const showTabs = route?.params?.showTabs || false;
    const userEmail = route?.params?.userEmail;
    const userNome = route?.params?.userNome;

    return (
        <Tab.Navigator>
            {(userType === 'aluno' || userType === 'coordination') && <Tab.Screen name="Salas" component={Salas} />}
            {(userType === 'professor' || userType === 'coordenacao') && <Tab.Screen name="Ambientes" component={Ambientes} />}
            {(userType === 'professor' || userType === 'coordenacao') && <Tab.Screen name="Reservas" component={Reservas} />}
            <Tab.Screen name="Perfil" component={Perfil} initialParams={{ userNome, userEmail, userType }} />
            {userType === 'coordenacao' && <Tab.Screen name="Pessoas" component={Pessoas} />}
        </Tab.Navigator>
    );
}

