import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Home(props) {

  const handleClick = (event) => {
    props.changeScreen('homeJogo')
    props.changeJogo('velha')
  }

  const handleClick2 = () => {
    props.changeScreen('forca')
  }

  const handleClick3 = () => {
    props.changeScreen('memoria')
    props.changeJogo('memoria')
  }

  return (
    <View style={styles.container}>
      <Button title='Jogo da velha' onPress={handleClick}></Button>
      <Button title='Forca' onPress={handleClick2}></Button>
      <Button title='Jogo da memória' onPress={handleClick3}></Button>
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  input: {
    width: "80%",
    height: 20,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1
    
  },
});
