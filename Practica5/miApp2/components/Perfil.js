import { View, Text } from "react-native";
import React,{useState} from "react";
import { Button } from "react-native-web";

export const Perfil = ({nombre, carrera, materia, cuatri}) => {

    const [mostrar, setMostrar]= useState(false)

    return(
        <View>
            <Text> {nombre} </Text>

            {mostrar && 
            <>
            <Text> {carrera} </Text>
            <Text> {materia} </Text>
            <Text> {cuatri} </Text>
            </> }

            <Button title="Ver Perfil" onPress={ ()=>setMostrar(!mostrar) }/>

        </View>
    )
}