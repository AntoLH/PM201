import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Modal, Alert, Platform } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';

export default function DetalleUsuarioScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const eliminarUsuario = async () => {
    try {
      // CORRECCIÓN: Quitamos la diagonal al final de la URL
      const respuesta = await fetch(`http://10.181.42.137:5000/v1/usuarios/${params.id}`, {
      method: 'DELETE',
      headers: {
        // Aquí mandamos la credencial de admin:1234 en Base64
        'Authorization': 'Basic YWRtaW46MTIzNA=='
      }
    });
      
      if (respuesta.ok) {
        setModalVisible(false);
        if(Platform.OS === 'web') { window.alert("Usuario eliminado correctamente"); } 
        else { Alert.alert("Éxito", "Usuario eliminado correctamente"); }
        
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
      console.log("Error al eliminar:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Detalle del usuario' }} />

      <Text style={styles.tituloHeader}>Detalles del Usuario</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nombre</Text>
        <Text style={styles.valor}>{params.nombre}</Text>

        <Text style={styles.label}>Edad</Text>
        <Text style={styles.valor}>{params.edad} años</Text>
      </View>

      <View style={styles.botonesContainer}>
        <Pressable 
          style={styles.botonActualizar}
          onPress={() => router.push({
            pathname: '/actualizar',
            params: { id: params.id, nombre: params.nombre, edad: params.edad }
          })}
        >
          <Text style={styles.textoBotonNegro}>Actualizar</Text>
        </Pressable>

        <Pressable style={styles.botonEliminar} onPress={() => setModalVisible(true)}>
          <Text style={styles.textoBotonBlanco}>Eliminar</Text>
        </Pressable>
      </View>

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalFondo}>
          <View style={styles.modalContenido}>
            <Text style={styles.modalTitulo}>Confirmar eliminación</Text>
            <Text style={styles.modalTexto}>
              ¿Estás seguro de que deseas eliminar al usuario {params.nombre}?
            </Text>
            <View style={styles.modalBotones}>
              <Pressable style={styles.botonCancelar} onPress={() => setModalVisible(false)}>
                <Text style={styles.textoBotonNegro}>Cancelar</Text>
              </Pressable>
              <Pressable style={styles.botonConfirmarEliminar} onPress={eliminarUsuario}>
                <Text style={styles.textoBotonBlanco}>Sí, eliminar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA', padding: 20 },
  tituloHeader: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  infoContainer: { marginBottom: 40 },
  label: { fontSize: 14, color: '#6B7280', marginBottom: 5 },
  valor: { fontSize: 18, fontWeight: 'bold', color: '#1F2937', marginBottom: 20 },
  botonesContainer: { alignItems: 'center' },
  botonActualizar: { backgroundColor: '#FBBF24', width: '80%', padding: 15, borderRadius: 8, marginBottom: 15, alignItems: 'center' },
  botonEliminar: { backgroundColor: '#DC2626', width: '80%', padding: 15, borderRadius: 8, alignItems: 'center' },
  textoBotonNegro: { color: '#000', fontWeight: 'bold', fontSize: 16 },
  textoBotonBlanco: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
  modalFondo: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modalContenido: { backgroundColor: 'white', padding: 25, borderRadius: 15, width: '85%', alignItems: 'center' },
  modalTitulo: { fontSize: 18, fontWeight: 'bold', color: '#DC2626', marginBottom: 15 },
  modalTexto: { fontSize: 14, textAlign: 'center', marginBottom: 25, color: '#4B5563' },
  modalBotones: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  botonCancelar: { backgroundColor: '#E5E7EB', padding: 12, borderRadius: 8, width: '45%', alignItems: 'center' },
  botonConfirmarEliminar: { backgroundColor: '#DC2626', padding: 12, borderRadius: 8, width: '45%', alignItems: 'center' }
});