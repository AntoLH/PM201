/* Zona 1: Improtaciones de archivos y componentes */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React,{Component, useEffect, useState} from 'react';
import TarjetasScreen from '../Screens/TarjetasScreen';
import PressableScreen from './PressableScreen';
import {ImagenFondo} from './ImagenFondo';
import { SplashScreen } from './SplashScreen';
import {Componente1} from './Componente1';
import { Home } from './Home';
import SwitchScreen from './SwitchScreen';
import { Componente4_0 } from './Componente4_0';
import {Alerta} from './Alerta'
import { FlatListScreen } from './FlatListScreen';
import { SectionListScreen } from './SectionListScreen';

/* Zona 2: Main - Componentes del Screen */
export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    useEffect(() => {
        if (screen === 'splashScreen') {
            const timer = setTimeout(() => {
                setScreen('home');
            }, 6000);
            return () => clearTimeout(timer);
        }
    }, [screen]);

    switch (screen) {
        case 'tarjetas': 
            return <TarjetasScreen/>;
        case 'componente1':
            return <Componente1/>;
        case 'pressableScreen': 
            return <PressableScreen/>;
        case 'switch':
            return <SwitchScreen/>;
        case 'input':
            return <Componente4_0/>
        case 'alert':
            return <Alerta/>
        case 'flatList':
            return <FlatListScreen/>
        case 'sectionList':
            return <SectionListScreen/>
        case 'imagenFondo':
            return <ImagenFondo style={styles.container}/>;
        case 'home':
            return <Home/>;
        case 'splashScreen':
            return <SplashScreen/>;
        case 'menu':
            default:
                return (
                    <View style={styles.container}>
                        <Text>Menú de prácticas</Text>
                        <Button title='Práctica Tarjetas' onPress={ () => setScreen('tarjetas') }/>

                        <Button title="Componente 1" onPress={() => setScreen('componente1')}/>

                        <Button title='PressableScreen' onPress={() => setScreen('pressableScreen') }/>

                        <Button title='Switch' onPress={() => setScreen('switch')}/>

                        <Button title='Input' onPress={() => setScreen('input')}/>

                        <Button title='Alerta' onPress={() => setScreen('alert')}/>

                        <Button title='Imagen Bg' onPress={() => setScreen('imagenFondo')}/>

                        <Button title='Splash' onPress={() => setScreen('splashScreen')}/>
                        
                        <Button title='Flat List' onPress={() => setScreen('flatList')}/>

                        <Button title='Section List' onPress={() => setScreen('sectionList')}/>
                    </View>
                );//Return
    }//Switch
}//Función

/* Zona 3: Estilos y posicionamiento */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#570d0d',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 15,
    padding: 20
  },
  titulo: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  }
});