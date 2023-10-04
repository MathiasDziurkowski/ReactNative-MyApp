import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, TextInput, Button} from 'react-native';



export default function HomeJogo(props) {
    
    const [player1, setPlayer1] = useState('')
    const [player2, setPlayer2] = useState('')

    const handleClick = () => {
        props.changeScreen("jogo")
    }
    
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Jogador 1' onChangeText={setPlayer1}>

            </TextInput>

            <TextInput style={styles.input} placeholder='Jogador 2' onChangeText={setPlayer2}></TextInput>

            <Button title='Jogar' onPress={handleClick}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input:{
        borderWidth: 1,
        borderRadius: 20,
        borderStyle: 'solid',
        borderColor: 'black',
        padding: 5,
    }

})