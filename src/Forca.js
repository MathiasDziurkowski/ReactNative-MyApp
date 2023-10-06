import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Forca(props) {
    const [chute, setChute] = useState("");
    let array = props.palavra.split("");
    array = array.map((letra) => {
        if (letra != " "){
            return "_ "
        }
        return "  "
    })

    const [letras, setLetras] = useState(array)

    function handleClick() {
        
    }

    function confirmarChute(chute){
        if (chute.match("[A-z]")){
            setChute(chute);
        }
        else{
            alert("Digite um chute de A à Z")
        }
    }

    return (
        <View>
            <Text>{letras}</Text>
            <TextInput placeholder='Escreva o seu chute' onChangeText={setChute}></TextInput>
            <Button  title='Confirmar' onPress={handleClick}></Button>
        </View>
    )
} 