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
    const userType = route?.params?.userType || 'student';  
    const showTabs = route?.params?.showTabs || false;

    return (
        <Tab.Navigator>
            {(userType === 'student' || userType === 'coordination') && <Tab.Screen name="Salas" component={Salas} />}
            {(userType === 'teacher' || userType === 'coordination') && <Tab.Screen name="Ambientes" component={Ambientes} />}
            {(userType === 'teacher' || userType === 'coordination') && <Tab.Screen name="Reservas" component={Reservas} />}
            <Tab.Screen name="Perfil" component={Perfil} />
            {userType === 'coordination' && <Tab.Screen name="Pessoas" component={Pessoas} />}
        </Tab.Navigator>
    );
}

