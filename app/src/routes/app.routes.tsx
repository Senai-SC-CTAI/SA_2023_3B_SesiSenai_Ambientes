import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

import { Ambientes } from '../screens/Ambientes/index.tsx';
import { Reservas } from '../screens/Reservas/index.tsx';
import { Perfil } from '../screens/Perfil/index.tsx';

export function TabRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
                name='Ambientes'
                component={Ambientes}
                options={{
                    title: 'Ambientes'
                }}
            />
            <Tab.Screen
                name='Reservas'
                component={Reservas}
                options={{
                    title: 'Minhas Reservas',
                }}
                
            />
                <Tab.Screen
                name='Perfil'
                component={Perfil}
                options={{
                    title: 'Perfil',
                }}
                
            />
        </Tab.Navigator>
    )
}