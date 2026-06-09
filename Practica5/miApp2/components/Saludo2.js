import {Text, Image, Button} from 'react-native'

export const Saludo2= () => { 
    return(

        <View>
        <text>Hola RN: Componente Propio</text>
        <Image source={require('../assets/wave.png')}/>
        <Button title='Hola 201'></Button>
        
        </View>
    )
}