import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Forca() {
    const [chute, setChute] = useState("");
    let array = props.palavra.split("");
    array = array.map((letra) => {
        if (letra != " "){
            return "_ "
        }
        return "  "
    })

    return (
        <View>
            <TextInput placeholder='Escreva o seu chute' onChangeText={setChute}></TextInput>
            <Button onPress={} title='Confirmar'></Button>
        </View>
    )
} 