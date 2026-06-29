import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import TarjetasScreen from './TarjetasScreen';
import Componente1 from './Componente1';
import FlatListScreen from './Practica4/FlatListScreen';
import SectionListScreen from './Practica4/SectionListScreen';
import Practicagena from './Practicagena';
import PressableScreen from './PressableScreen';
import SwitchScreen from './switchScreen';
import { Componente4_0 } from './componente4_0';
import ComponenteAlert from './componentealerta';

export default function App() {
    const [screen, setScreen] = useState('menu');
    
    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen/>;
        case 'Componente1':
            return <Componente1/>;
        case 'flatlist':
            return <FlatListScreen/>;
        case 'SectionList':
            return <SectionListScreen/>;
        case 'practicagena':
            return <Practicagena/>;
        case 'pressable':
            return <PressableScreen/>;
        case 'switch':
            return <SwitchScreen/>;
        case 'componente4_0':
            return <Componente4_0/>;
        case 'alerta':
            return <ComponenteAlert/>;
        case 'menu':
        default:
            return (
                <View style={styles.container}>
                    <Text style={styles.titulo}> Menú de prácticas </Text>
                    <Button title="Practica tarjetas" onPress={() => setScreen('tarjetas')}/>
                    <Button title="Practica Componente1" onPress={() => setScreen('Componente1')}/>
                    <Button title="Practica FlatList" onPress={() => setScreen('flatlist')}/>
                    <Button title="Practica SectionList" onPress={() => setScreen('SectionList')}/>
                    <Button title="Practica Gena" onPress={() => setScreen('practicagena')}/>
                    <Button title="Practica Pressable" onPress={() => setScreen('pressable')}/>
                    <Button title="Practica Switch" onPress={() => setScreen('switch')}/>
                    <Button title="Practica TextInputs" onPress={() => setScreen('componente4_0')}/>
                    <Button title="Practica Alertas" onPress={() => setScreen('alerta')}/>
                </View>
            );
    }
}

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