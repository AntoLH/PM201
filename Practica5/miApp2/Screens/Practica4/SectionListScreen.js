import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';

export default function SectionList(){

    const datos = [
        {
            title: 'Ingenieria en Sistemas',
            data: [
                {
                    nombre: 'Erick'
                },
                {
                    nombre:  'Javier'
                }
            ]
        },
        {
            title: 'Tecnologias de la informacion',
            data: [
                {
                    nombre: 'Ana'
                },
                {
                    nombre:  'Pedro'
                }
            ]
        }
    ];

    return(
        <View style = { styles.container }>
            <Text style={styles.titulo}>
                Estudiantes por carrera
            </Text>

        <SectionList 
            sections={datos}
            renderSectionHeader={({ section }) => (
                <Text style={styles.header}>
                    {SectionList}
                </Text>
            )}
            renderItem={({ item })=> (
                <text style={styles.item}>
                    {item.nombre}
                </text>
            )}
        />
        </View>
    )

    const styles = StyleSheet.create({
        container:{
            flex: 1,
            padding: 20
        },
        titulo: {
            fontSize: 25,
            fontWeight: 'bold',
            backgroundColor: '#90caf9',
            padding: 10
        },
        item: {
            padding: 15
        }
    });

}