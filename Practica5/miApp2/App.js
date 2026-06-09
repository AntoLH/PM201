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
      <Perfil nombre="anto" carrera="ISC" materia="Movil" cuatri="9"/>
      <Perfil nombre="eric" carrera="ISC" materia="Movil" cuatri="1"/>
    </View>
  );
}
/* Zona 3: Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
