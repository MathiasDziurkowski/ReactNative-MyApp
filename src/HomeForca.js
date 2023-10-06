import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export default function HomeForca(props) {
    const handleClick = () => {
        props.changeScreen("forca")
    }
    return(
    <View style={styles.div}>
        <TextInput onChangeText={props.changePalavra} style={styles.caixaTexto} placeholder="Escreva a palavra da forca:"></TextInput>
        <Button title='Jogar' onPress={handleClick}></Button>
    </View>
    )

    
}
const styles = StyleSheet.create({
    caixaTexto: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5
    },

    div:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        gap: 10
    }
})