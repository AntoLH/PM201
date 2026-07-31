import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AltaUsuariosScreen from './screens/AltaUsuariosScreen';
import ConsultaUsuariosScreen from './screens/ConsultaUsuariosScreen';
import DetalleUsuarioScreen from './screens/DetalleUsuarioScreen';
import ActualizarUsuarioScreen from './screens/ActualizarUsuarioScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* initialRouteName define qué pantalla se abre primero al iniciar la app */}
      <Stack.Navigator initialRouteName="Consulta">
        
        <Stack.Screen 
          name="Consulta" 
          component={ConsultaUsuariosScreen} 
          options={{ title: 'Consulta' }} 
        />
        
        <Stack.Screen 
          name="Alta" 
          component={AltaUsuariosScreen} 
          options={{ title: 'Registro de Usuario' }} 
        />
        
        <Stack.Screen 
          name="DetalleUsuario" 
          component={DetalleUsuarioScreen} 
          options={{ title: 'Detalle del usuario' }} 
        />
        
        <Stack.Screen 
          name="ActualizarUsuario" 
          component={ActualizarUsuarioScreen} 
          options={{ title: 'Actualizar Usuario' }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
