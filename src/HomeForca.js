import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export default function HomeForca(props) {
    const [palavra, setPalavra] = useState("");
    const handleClick = () => {
        props.changeScreen("forca")
    }
    return(
    <View>
        <TextInput onChange={setPalavra} placeholder="Escreva a palavra da forca:"></TextInput>
        <Button onPress={handleClick}></Button>
    </View>
    )

    
}