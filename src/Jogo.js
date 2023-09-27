import { useState } from "react";
import { Stylesheet, View, Text, Button, StyleSheet, FlatList } from "react-native";

export default function Jogo(props) {
    const handleClick = (event) => {
        props.changeScreen("home"); 
    }

    const [b1, setB1] = useState("");
    const [b2, setB2] = useState("");
    const [b3, setB3] = useState("");
    const [b4, setB4] = useState("");
    const [b5, setB5] = useState("");
    const [b6, setB6] = useState("");
    const [b7, setB7] = useState("");
    const [b8, setB8] = useState("");
    const [b9, setB9] = useState("");

    const [vez,setVez]  = useState("X");

    const trocarVez = () => {
        if (vez == "X"){
            setVez("O")
        }
        else{
            setVez("X")
        }
    }

    const handleClickB1 = () => {
        if (b1 == ""){
            setB1(vez)
            trocarVez()
        }
    }

    const handleClickB2 = () => {
        if (b2 == ""){
            setB2(vez)
            trocarVez()
        }
    }

    const handleClickB3 = () => {
        if (b3 == ""){
            setB3(vez)
            trocarVez()
        }
    }

    const handleClickB4 = () => {
        if (b4 == ""){
            setB4(vez)
            trocarVez()
        }
    }

    const handleClickB5 = () => {
        if (b5 == ""){
            setB5(vez)
            trocarVez()
        }
    }

    const handleClickB6 = () => {
        if (b6 == ""){
            setB6(vez)
            trocarVez()
        }
    }

    const handleClickB7 = () => {
        if (b7 == ""){
            setB7(vez)
            trocarVez()
        }
    }

    const handleClickB8 = () => {
        if (b8 == ""){
            setB8(vez)
            trocarVez()
        }
    }

    const handleClickB9 = () => {
        if (b9 == ""){
            setB9(vez)
            trocarVez()
        }
    }
    return (
        <View >
            <Text>Jogo</Text>
            <Button title='Voltar' onPress={handleClick}></Button>
            <Button title={b1} onPress={handleClickB1}></Button>
            <Button title={b2} onPress={handleClickB2}></Button>
            <Button title={b3} onPress={handleClickB3}></Button>
            <Button title={b4} onPress={handleClickB4}></Button>
            <Button title={b5} onPress={handleClickB5}></Button>
            <Button title={b6} onPress={handleClickB6}></Button>
            <Button title={b7} onPress={handleClickB7}></Button>
            <Button title={b8} onPress={handleClickB8}></Button>
            <Button title={b9} onPress={handleClickB9}></Button>
        </View>

    )
}

const styles = StyleSheet.create({
    view: {
        
    },


});