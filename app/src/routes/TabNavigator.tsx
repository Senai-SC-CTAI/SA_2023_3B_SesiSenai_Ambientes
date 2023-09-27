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
    const accountType = route?.params?.accountType || ''; // Obtenha o tipo de conta

    return (
        <Tab.Navigator>
            {showTabs ? (
                <>
                    {accountType === 'estudante' ? (
                        <>
                            <Tab.Screen name="Salas" component={Salas} />
                            <Tab.Screen name="Perfil" component={Perfil} />
                        </>
                    ) : null}

                    {accountType === 'professor' ? (
                        <>
                            <Tab.Screen name="Ambientes" component={Ambientes} />
                            <Tab.Screen name="Reservas" component={Reservas} />
                            <Tab.Screen name="Perfil" component={Perfil} />
                        </>
                    ) : null}
                </>
            ) : null}
            {/* Adicione as outras telas aqui */}
        </Tab.Navigator>
    );
}

