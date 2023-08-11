import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

import { Ambientes } from '../screens/Ambientes/index.tsx';
import { Reservas } from '../screens/Reservas/index.tsx';
import { Perfil } from '../screens/Perfil/index.tsx';
import { Login}  from '../screens/Login/index.tsx';
import { Pessoas } from '../screens/Pessoas/index.tsx'
import { EsqueceuSenha } from '../screens/EsqueceuSenha/index.tsx'
import { Salas } from '../screens/Salas/index.tsx'
import { Cadastro } from '../screens/Cadastro/index.tsx';


export function TabRoutes(){
    return(
        <Tab.Navigator>
                 <Tab.Screen
                name='Login'
                component={Login}
                options={{
                    title: 'Login',
                }}
            />
                <Tab.Screen
                name='Cadastro'
                component={Cadastro}
                options={{
                    title: 'Cadastro',
                }}
            />
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
                       <Tab.Screen
                name='Pesssoas'
                component={Pessoas}
                options={{
                    title: 'Pessoas',
                }}
            />
                       <Tab.Screen
                name='EsqueceuSenha'
                component={EsqueceuSenha}
                options={{
                    title: 'Esqueceu Senha',
                }}
            />
                       <Tab.Screen
                name='Salas'
                component={Salas}
                options={{
                    title: 'Salas',
                }}
            />
        </Tab.Navigator>
    )
}