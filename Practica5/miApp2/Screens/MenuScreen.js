import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

// IMPORTACIONES CON LLAVES (Tus archivos con exportación nombrada)
import { SplashScreen } from './SplashScreen';
import { Home } from './Home';
import { ImagenFondo } from './ImagenFondo';

// IMPORTACIONES SIN LLAVES (Tus archivos con exportación por defecto)
import Componente1 from './Componente1';
import Componente4_0 from './Componente4_0';
import ComponenteAlert from './Componentealerta';
import Practicagena from './Practicagena';
import PressableScreen from './PressableScreen';
import SwitchScreen from './SwitchScreen';
import TarjetasScreen from './TarjetasScreen';

export default function MenuScreen() {
  const [screen, setScreen] = useState('Splash');

  // Temporizador de 3 segundos para el SplashScreen
  useEffect(() => {
    if (screen === 'Splash') {
      const timer = setTimeout(() => {
        setScreen('Menu'); 
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  // Enrutador de las pantallas
  const renderScreen = () => {
    switch (screen) {
      case 'Splash': return <SplashScreen />;
      case 'Home': return <Home />;
      case 'ImagenFondo': return <ImagenFondo />;
      case 'Componente1': return <Componente1 />;
      case 'Componente4_0': return <Componente4_0 />;
      case 'Alerta': return <ComponenteAlert />;
      case 'Practicagena': return <Practicagena />;
      case 'Pressable': return <PressableScreen />;
      case 'Switch': return <SwitchScreen />;
      case 'Tarjetas': return <TarjetasScreen />;
      case 'Menu':
      default:
        return (
          <ScrollView contentContainerStyle={styles.menuContainer}>
            <Text style={styles.titulo}>Menú de prácticas</Text>
            
            <View style={styles.botonWrapper}>
              <Button title="HOME" onPress={() => setScreen('Home')} />
            </View>
            <View style={styles.botonWrapper}>
              <Button title="IMAGEN DE FONDO" onPress={() => setScreen('ImagenFondo')} />
            </View>
            <View style={styles.botonWrapper}>
              <Button title="PRACTICA TARJETAS" onPress={() => setScreen('Tarjetas')} />
            </View>
            <View style={styles.botonWrapper}>
              <Button title="PRACTICA COMPONENTE 1" onPress={() => setScreen('Componente1')} />
            </View>
            <View style={styles.botonWrapper}>
              <Button title="PRACTICA GENA" onPress={() => setScreen('Practicagena')} />
            </View>
            <View style={styles.botonWrapper}>
              <Button title="PRACTICA PRESSABLE" onPress={() => setScreen('Pressable')} />
            </View>
            <View style={styles.botonWrapper}>
              <Button title="PRACTICA SWITCH" onPress={() => setScreen('Switch')} />
            </View>
            <View style={styles.botonWrapper}>
              <Button title="PRACTICA TEXTINPUTS" onPress={() => setScreen('Componente4_0')} />
            </View>
            <View style={styles.botonWrapper}>
              <Button title="PRACTICA ALERTAS" onPress={() => setScreen('Alerta')} />
            </View>
          </ScrollView>
        );
    }
  };

  return (
    <View style={styles.container}>
      {/* Botón universal para regresar al menú */}
      {screen !== 'Splash' && screen !== 'Menu' && (
        <View style={styles.backButtonContainer}>
          <Button title="← Volver al Menú" color="#8a8a8a" onPress={() => setScreen('Menu')} />
        </View>
      )}
      
      {/* Carga la pantalla seleccionada */}
      {renderScreen()}
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4a0e0e', // Fondo rojo UPQ
  },
  menuContainer: {
    padding: 20,
    alignItems: 'center',
    paddingBottom: 50,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 40,
    color: '#ffffff', // Texto blanco
  },
  botonWrapper: {
    marginVertical: 8,
  },
  backButtonContainer: {
    marginTop: 40,
    marginLeft: 15,
    marginBottom: 10,
    alignItems: 'flex-start',
  }
});