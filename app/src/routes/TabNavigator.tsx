import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ambientes } from '../screens/Ambientes';
import { Reservas } from '../screens/Reservas';
import { Perfil } from '../screens/Perfil';
import { Pessoas } from '../screens/Pessoas';
import { Salas } from '../screens/Salas';

const Tab = createMaterialTopTabNavigator();

export function TabNavigator({ route }) {
    const showTabs = route?.params?.showTabs || false;

    return (
        <Tab.Navigator>
            {showTabs ? (
                <>
                    <Tab.Screen name="Ambientes" component={Ambientes} />
                    <Tab.Screen name="Reservas" component={Reservas} />
                    <Tab.Screen name="Perfil" component={Perfil} />
                </>
            ) : null}
            {/* Adicione as outras telas aqui */}
        </Tab.Navigator>
    );
}
