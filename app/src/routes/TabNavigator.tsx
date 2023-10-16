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
    const showTabs = route?.params?.showTabs || false;

    return (
        <Tab.Navigator>
                            <Tab.Screen name="Salas" component={Salas} />
                            <Tab.Screen name="Pessoas" component={Pessoas} />
                            <Tab.Screen name="Ambientes" component={Ambientes} />
                            <Tab.Screen name="Reservas" component={Reservas} />
                            <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    );
}

