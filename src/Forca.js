import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Forca(props) {
    const [chute, setChute] = useState("");
    const [erros, setErros] = useState(0);
    const [letraJogadas, setLetraJogadas] = useState([]);
    let array = props.palavra.split("");
    array = array.map((letra) => {
        if (letra != " "){
            return "_ "
        }
        return "  "
    })

    const [letras, setLetras] = useState(array)
    

    function handleClick() {
        confirmarChute(chute)
    }

    function handleClick2() {
        props.changeScreen('HomeForca')
    }

    function confirmarChute(chute){
        if (chute.length == 1 && chute.match("[A-z]"))
        {
            setChute(chute);    
            var newLetras = [...letras]
            var possuiLetra = false;

            for (let index = 0; index < (props.palavra).length; index++){
                if (props.palavra.charAt(index) == chute){
                    newLetras[index] = chute
                    possuiLetra = true;
                }
            }
    
            if(possuiLetra){
                if (letraJogadas.includes(chute)){
                    alert("Você já chutou esta letra")
                    } 
                    else{
                setLetras(newLetras)
                setLetraJogadas(letraJogadas + " " + chute)
                    }
            }
            else{
                setErros((erros + 1))              
            } 
            
        }

        else{
           if (chute == props.palavra){
                setLetras(chute)
           } 
        }


    }


    return (
        <View style={styles.div}>
            <Text>{letras}</Text>
            <TextInput style={styles.input} placeholder='Escreva o seu chute' onChangeText={setChute}></TextInput>
            <Text>{letraJogadas}</Text>
            <Button  title='Confirmar' onPress={handleClick}></Button>
            <Button title='Voltar' onPress={handleClick2}></Button>
        </View>
    )
} 

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 20,
    },

    div: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    }

})