import React from 'react';

import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function FlatListenScreen(){
    const estudiantes = [{
        id:'1',
        nombre: 'Erick',
        carrera: 'ISC'
    },
    {
        id:'2',
        nombre: 'Toño',
        carrera: 'ISC' 
    },
    {
        id:'3',
        nombre: 'Javier',
        carrera: 'ISC' 
    }
    ];
    return(
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.container}> Lista de estudiantes </Text>
            <FlatList 
            data = {estudiantes} 
            renderItem={({item})=>(
                <View style={StyleSheet.card}>
                    <Text>Nombre:{item.nombre}</Text>
                    <Text>Carrerae:{item.carrera}</Text>
                </View>
            )}
        />
        </View>
    )
}

const styles=StyleSheet.create({
    Container: {
    flex: 1,
    padding:20,
    },

    titulo:{
    fontSize:25,
    fontWeight:'bold'
    },

    card:{
    backgroundColor:'#d4f1f4',
    padding: 15,
    margin:10,
    borderRadius:10
    }

  });