import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React, { useState } from 'react';
import TarjetasScreen from './TarjetasScreen';
import Componente1 from './Componente1';
import FlatListScreen from './Practica4/FlatListScreen';
import SectionListScreen from './Practica4/SectionListScreen';
import Practicagena from './Practicagena';

export default function App() {
    const [screen,setScreen]=useState('menu');
    
    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen/>
        case 'Componente1':
            return <Componente1/>
        case 'flatlist':
            return <FlatListScreen/>
        case 'SectionList':
            return <SectionListScreen/>
        case 'practicagena':
            return <Practicagena/>
        case 'menu':
            default:
        return (
            <View>
                <Text> Menu de practica </Text>
                <Button title= "Practica tarjetas" onPress={()=>setScreen('tarjetas')}/>
                <Button title= "Practica Componente1" onPress={()=>setScreen('Componente1')}/>
                <Button title= "Practica FlatList" onPress={()=>setScreen('flatlist')}/>
                <Button title= "Practica SectionList" onPress={()=>setScreen('SectionList')}/>
                <Button title= "Practica Gena" onPress={()=>setScreen('practicagena')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#570d0d',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});