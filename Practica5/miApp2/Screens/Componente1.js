
/* Zona1: Importaciones de archivos y componentes */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

/* Zona 2: Main - componentes */
export default function App() {
  return (
    <View>
        <Text> Aqui va la primer practica de componentes nativos </Text>
    </View>
  );
}
/* Zona 3: Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});