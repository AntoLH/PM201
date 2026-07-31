import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert, Platform } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';

export default function ActualizarUsuarioScreen() {
  const params = useLocalSearchParams(); 
  const router = useRouter();
  
  const [nombre, setNombre] = useState(params.nombre);
  const [edad, setEdad] = useState(params.edad); 

  const guardarCambios = async () => {
    try {
      // CORRECCIÓN: Quitamos la diagonal al final de la URL
      const respuesta = await fetch(`http://localhost:5000/v1/usuarios/${params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Aquí también mandamos la llave para que nos deje actualizar
        'Authorization': 'Basic YWRtaW46MTIzNA=='
      },
      body: JSON.stringify({
        nombre: nombre,
        edad: parseInt(edad, 10)
      }),
    });

      if (respuesta.ok) {
        if(Platform.OS === 'web') { window.alert("Usuario actualizado correctamente"); }
        else { Alert.alert("Éxito", "Usuario actualizado correctamente"); }
        
        router.back(); 
      } else {
        // CORRECCIÓN: Mostramos el código de error exacto
        if(Platform.OS === 'web') { 
          window.alert(`Error: El servidor rechazó la petición con el código: ${respuesta.status}`); 
        } else {
          Alert.alert("Error", `Código: ${respuesta.status}`);
        }
      }
    } catch (error) {
      if(Platform.OS === 'web') { window.alert("Error de red: " + error); }
      console.log("Error al actualizar:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Actualizar Usuario' }} />

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