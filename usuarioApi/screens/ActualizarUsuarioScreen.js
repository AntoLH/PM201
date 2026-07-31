import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';

export default function ActualizarUsuarioScreen({ route, navigation }) {
  const { usuario } = route.params; // Datos precargados
  
  // Iniciamos los estados con los datos que ya existen
  const [nombre, setNombre] = useState(usuario.nombre);
  const [edad, setEdad] = useState(usuario.edad.toString()); // Lo pasamos a string para el TextInput

  const guardarCambios = async () => {
    try {
      const respuesta = await fetch(`http://localhost:5000/v1/usuarios/${usuario.id}`, {
        method: 'PUT', // O PATCH, dependiendo de tu backend en FastAPI
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombre,
          edad: parseInt(edad, 10)
        }),
      });

      if (respuesta.ok) {
        Alert.alert("Éxito", "Usuario actualizado correctamente");
        navigation.navigate('Consulta'); // Te regresa a tu menú o lista principal
      } else {
        Alert.alert("Error", "No se pudieron guardar los cambios");
      }
    } catch (error) {
      console.log("Error al actualizar:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tituloHeader}>Actualizar Usuario</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.label}>Edad</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={edad}
          onChangeText={setEdad}
        />

        <Pressable style={styles.botonGuardar} onPress={guardarCambios}>
          <Text style={styles.textoBoton}>Guardar cambios</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA', padding: 20 },
  tituloHeader: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  formContainer: { backgroundColor: 'white', padding: 20, borderRadius: 10 },
  label: { fontSize: 14, fontWeight: 'bold', color: '#374151', marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 8, padding: 12, marginBottom: 20, fontSize: 16 },
  botonGuardar: { backgroundColor: '#FBBF24', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  textoBoton: { color: '#000', fontWeight: 'bold', fontSize: 16 }
});
