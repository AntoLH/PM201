import { StatusBar } from 'expo-status-bar';
import React from 'react';
import RegistroScreen from './Screens/RegistroScreen'; // Importamos tu componente

export default function App() {
  return (
    <>
      <RegistroScreen />
      <StatusBar style="auto" />
    </>
  );
}
