import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Pantalla de bienvenida
export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Libros</Text>
      <Text style={styles.subtitle}>Cargando...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4a0e0e',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    color: '#ccc',
    marginTop: 10,
  }
});