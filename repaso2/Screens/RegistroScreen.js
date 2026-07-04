import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, FlatList, Alert, ActivityIndicator, ImageBackground, StyleSheet } from 'react-native';

// Ruta de la imagen de fondo
const fondoImagen = require('../assets/marmol.jpg');

export default function RegistroScreen() {
  // Variables de estado para los inputs
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');

  // Variables para la lista y la animacion de carga
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(false);

  // Funcion que se dispara al presionar el boton
  const manejarRegistro = () => {
    // Validacion de campos vacios
    if (titulo.trim() === '' || autor.trim() === '' || genero.trim() === '') {
      Alert.alert('Alert', 'Todos los campos son obligatorios.');
      return;
    }

    // Bloquea la pantalla y muestra el circulo de carga
    setCargando(true);

    // Temporizador para simular conexion a base de datos
    setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo,
        autor: autor,
        genero: genero
      };

      // Guarda el libro nuevo, limpia todo y detiene la carga
      setLibros([...libros, nuevoLibro]);
      setTitulo('');
      setAutor('');
      setGenero('');
      setCargando(false);

      // Notificacion de exito
      Alert.alert('Alert', 'Libro guardado correctamente.');
    }, 4000);
  };

  // Diseno individual de cada libro en la lista
  const renderItem = ({ item }) => (
    <View style={styles.tarjeta}>
      <Text style={styles.textoTitulo}>{item.titulo}</Text>
      <Text style={styles.textoDetalle}>Autor: {item.autor}</Text>
      <Text style={styles.textoDetalle}>Género: {item.genero}</Text>
    </View>
  );

  return (
    <ImageBackground source={fondoImagen} style={styles.fondo} resizeMode="cover">
      <View style={styles.capaOscura}>
        <Text style={styles.tituloPrincipal}>Catálogo de Libros</Text>

        <TextInput
          style={styles.input}
          placeholder="Título del libro"
          placeholderTextColor="#666"
          value={titulo}
          onChangeText={setTitulo}
        />
        <TextInput
          style={styles.input}
          placeholder="Autor"
          placeholderTextColor="#666"
          value={autor}
          onChangeText={setAutor}
        />
        <TextInput
          style={styles.input}
          placeholder="Género"
          placeholderTextColor="#666"
          value={genero}
          onChangeText={setGenero}
        />

        <Pressable style={styles.boton} onPress={manejarRegistro}>
          <Text style={styles.textoBoton}>Agregar Libro</Text>
        </Pressable>

        {/* Muestra la carga solo si el estado es true */}
        {cargando && (
          <View style={styles.contenedorCarga}>
            <ActivityIndicator size="large" color="#ffffff" />
            <Text style={styles.textoCarga}>Guardando libro...</Text>
          </View>
        )}

        <Text style={styles.contador}>Total de libros: {libros.length}</Text>

        {/* Lista optimizada */}
        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={styles.lista}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  capaOscura: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  tituloPrincipal: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  boton: {
    backgroundColor: '#1d4ed8',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contenedorCarga: {
    backgroundColor: 'rgba(128, 128, 128, 0.8)',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  textoCarga: {
    color: '#fff',
    marginTop: 10,
    fontWeight: 'bold',
  },
  contador: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  lista: {
    flex: 1,
  },
  tarjeta: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  textoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  textoDetalle: {
    fontSize: 14,
    color: '#333',
  }
});