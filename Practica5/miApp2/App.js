/* Zona1: Importaciones de archivos y componentes */

import { StatusBar } from 'expo-status-bar';
/* import { Component } from 'react';*/
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo';
import {Saludo2} from './components/Saludo2';
import {Perfil} from './components/Perfil';

/* Zona 2: Main - componentes */
export default function App() {
  return (
    <View style={styles.container}>
      <Perfil style={styles.tarjetaverde} nombre="anto" carrera="ISC" materia="Movil" cuatri="9"/>
      <Perfil style={styles.tarjetaroja} nombre="eric" carrera="LAGE" materia="Movil" cuatri="1"/>
      <Perfil style={styles.tarjetaverde} nombre="Anthx" carrera="MECA" materia="Movil" cuatri="8"/>
    </View>
  );
}
/* Zona 3: Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffd5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection:'column',
  },
  tarjetaverde:{
    backgroundColor: '#6BCB77',
  },
  tarjetaroja:{
    backgroundColor: '#FF6B6B',
  },
});
