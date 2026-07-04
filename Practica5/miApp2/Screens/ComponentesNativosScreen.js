import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ActivityIndicatorCarga from '../components/ActivityIndicatorCarga';
import ActivityIndicatorDemo from '../components/ActivityIndicatorDemo';
import KeyboardView from '../components/KeyboardAvoidingView';

export default function ComponentesNativosScreen() {
  return (
    <View style={styles.pantalla}>
      <StatusBar style="dark" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={20}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
        >
          <Text style={styles.encabezado}>Práctica 9</Text>
          <Text style={styles.subtitulo}>Componentes Nativos</Text>

          <ActivityIndicatorDemo />
          <ActivityIndicatorCarga />
          <KeyboardView />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: '#F1F3F6',
  },
  container: {
    flexGrow: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  encabezado: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1D3557',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 18,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 25,
  },
});