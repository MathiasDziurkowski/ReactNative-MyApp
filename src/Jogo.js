import { useState } from "react";
import { Stylesheet, View, Text, Button, StyleSheet, FlatList, Pressable } from "react-native";

export default function Jogo(props) {
    const [matriz, setMatriz] = useState(
        [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]
        ]
    )
    const[vezJogador,setVezJogador] = useState("X")

    function VezJogador() {
        if (vezJogador == "X"){
            setVezJogador("O")
        }
        else {
            setVezJogador("X")
        }
    }

    const handleClickB = () => {
        VezJogador()
    }

    const handleClick = (event) => {
        props.changeScreen("home");
    }
    return (
        <View >
            <Text>Jogo</Text>
            <Button title='Voltar' onPress={handleClick}></Button>
            <View>
                <Pressable onPress={handleClickB}><Text>{matriz[0][0]}</Text></Pressable>
                <Pressable onPress={handleClickB}><Text>{matriz[0][1]}</Text></Pressable>
                <Pressable onPress={handleClickB}><Text>{matriz[0][2]}</Text></Pressable>
            </View>
            <View>
                <Pressable onPress={handleClickB}><Text>{matriz[1][0]}</Text></Pressable>
                <Pressable onPress={handleClickB}><Text>{matriz[1][1]}</Text></Pressable>
                <Pressable onPress={handleClickB}><Text>{matriz[1][2]}</Text></Pressable>
            </View>
            <View>
                <Pressable onPress={handleClickB}><Text>{matriz[2][0]}</Text></Pressable>
                <Pressable onPress={handleClickB}><Text>{matriz[2][1]}</Text></Pressable>
                <Pressable onPress={handleClickB}><Text>{matriz[2][2]}</Text></Pressable>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    view: {

    },


});