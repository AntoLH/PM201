import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Button, Alert, Platform, SafeAreaView, ScrollView } from 'react-native';

// Parche para que las alertas funcionen si pruebas en la Web
if (Platform.OS === 'web') {
    Alert.alert = (titular, mensaje) => {
        window.alert(titular + (mensaje ? '\n' + mensaje : ''));
    };
}

export default function RegistroScreen() {
    // 1. Declaramos los estados para guardar lo que el usuario escribe
    const [nombre, setNombre] = useState('');
    const [carrera, setCarrera] = useState('');
    const [semestre, setSemestre] = useState('');
    
    // Estados para los switches (inician en falso/no)
    const [taller, setTaller] = useState(false);
    const [constancia, setConstancia] = useState(false);
    const [deportes, setDeportes] = useState(false);

    // 2. Función que se ejecuta al presionar "Enviar Registro"
    const validarRegistro = () => {
        // Validar que no haya campos vacíos
        if (!nombre.trim() || !carrera.trim() || !semestre.trim()) {
            Alert.alert('Campos incompletos', 'Debes llenar todos los campos.'); // [cite: 122, 123]
            return; // Detenemos la ejecución aquí si hay error
        }

        // Validar que el semestre sea un número
        if (isNaN(semestre)) {
            Alert.alert('Error', 'El semestre debe ser un número.'); // [cite: 125, 126]
            return;
        }

        // Si todo está correcto, mostramos la alerta de éxito con el resumen
        const mensajeExito = `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\nTaller: ${taller ? 'Sí' : 'No'}\nConstancia: ${constancia ? 'Sí' : 'No'}\nDeportes: ${deportes ? 'Sí' : 'No'}`; // [cite: 115, 116, 117, 118, 119, 120]
        
        Alert.alert('Registro enviado', mensajeExito); // [cite: 131]
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <Text style={styles.titulo}>Registro de Evento Universitario</Text> 
                
                {/* Campos de texto */}
                <TextInput
                    style={styles.input}
                    placeholder="Nombre completo"
                    value={nombre}
                    onChangeText={setNombre}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Carrera"
                    value={carrera}
                    onChangeText={setCarrera}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Semestre"
                    value={semestre}
                    onChangeText={setSemestre}
                    keyboardType="numeric"
                />

                <Text style={styles.subtitulo}>Opciones</Text> 

                {/* Preguntas con Switch */}
                <View style={styles.filaSwitch}>
                    <Text style={styles.textoSwitch}>¿Asistirá al taller?</Text>
                    <Switch value={taller} onValueChange={setTaller} />
                </View>

                <View style={styles.filaSwitch}>
                    <Text style={styles.textoSwitch}>¿Requiere constancia?</Text>
                    <Switch value={constancia} onValueChange={setConstancia} />
                </View>

                <View style={styles.filaSwitch}>
                    <Text style={styles.textoSwitch}>¿Participará en actividades deportivas?</Text>
                    <Switch value={deportes} onValueChange={setDeportes} />
                </View>

                {/* Botón de envío */}
                <View style={styles.botonContainer}>
                    <Button title="Enviar Registro" onPress={validarRegistro} /> 
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

// Estilos visuales
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scroll: {
        padding: 20,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    subtitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
        fontSize: 16,
    },
    filaSwitch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    textoSwitch: {
        fontSize: 16,
    },
    botonContainer: {
        marginTop: 20,
    }
});
