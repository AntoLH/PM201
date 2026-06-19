/* Zona1: Importaciones de archivos y componentes */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React,{useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import Componente1 from './Componente1';

/* Zona 2: Main - componentes */
export default function App() {

    const [screen,setScreen]= useState('menu');

    switch(screen){
        case'tarjetas':
            return <TarjetasScreen/>;
        case'Componente1':
            return<Componente1/>;
        case'menu':
            default:
    
            return (
                <View>
                    <Text> Aqui va la primera practica de componentes nativos </Text>
                    <Button title='Practica Tarjetas' onPress={()=>setScreen('tarjetas')}/>
                    <Button title='Practica Tarjetas' onPress={()=>setScreen('Componente1')}/>
                </View>
                );
  }
}
/* Zona 3: Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffd5',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection:'row',
  },
});
