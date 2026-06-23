import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Estudiante(props) {

  return (
    <View style={styles.card}>

      <Text style={styles.nombre}>
        Nombre: {props.nombre}
      </Text>

      <Text style={styles.carrera}>
        Carrera: {props.carrera}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#6BCB77',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10
  },

  nombre: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  carrera: {
    fontSize: 16
  }

});