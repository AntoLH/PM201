import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import SplashScreen from './Screens/SplashScreen';
import RegistroScreen from './Screens/RegistroScreen';

// Orquestador principal
export default function App() {
  const [screen, setScreen] = useState('Splash');

  // Temporizador de 2 segundos
  useEffect(() => {
    if (screen === 'Splash') {
      const timer = setTimeout(() => {
        setScreen('Registro');
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [screen]);

  return (
    <View style={styles.container}>
      {screen === 'Splash' ? <SplashScreen /> : <RegistroScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});