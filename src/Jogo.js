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

    function FVezJogador() {
        if (vezJogador == "X"){
            setVezJogador("O")
        }
        else {
            setVezJogador("X")
        }
    }

    const handleClickB = (matrizX, matrizY) => {
        if (matriz[matrizX][matrizY] == " "){ 
            const novaMatriz = [[...matriz[0]], [...matriz[1]], [...matriz[2]]]
                novaMatriz[matrizX][matrizY] = vezJogador;
                setMatriz(novaMatriz);
                FVezJogador()

        }
        
    }

    const handleClick = (event) => {
        props.changeScreen("home");
    }
    return (
        <View >
            <Text>Jogo</Text>
            <Button title='Voltar' onPress={handleClick}></Button>
            <View style={styles.view}>
                <Pressable style={styles.Pressable} onPress={() => {
                    handleClickB(0,0)
                }}> <Text >{matriz[0][0]}</Text></Pressable>
                <Pressable style={styles.Pressable} onPress={() => {
                    handleClickB(0,1)
                }} ><Text>{matriz[0][1]}</Text></Pressable>
                <Pressable style={styles.Pressable} onPress={() => {
                    handleClickB(0,2)
                }} ><Text>{matriz[0][2]}</Text></Pressable>
            </View>
            <View style={styles.view}>
                <Pressable style={styles.Pressable} onPress={() => {
                    handleClickB(1,0)
                }}><Text>{matriz[1][0]}</Text></Pressable>
                <Pressable style={styles.Pressable} onPress={() => {
                    handleClickB(1,1)
                }}><Text>{matriz[1][1]}</Text></Pressable>
                <Pressable style={styles.Pressable}  onPress={() => {
                    handleClickB(1,2)
                }}><Text>{matriz[1][2]}</Text></Pressable>
            </View>
            <View style={styles.view}>
                <Pressable style={styles.Pressable} onPress={() => {
                    handleClickB(2,0)
                }}><Text>{matriz[2][0]}</Text></Pressable>
                <Pressable style={styles.Pressable} onPress={() => {
                    handleClickB(2,1)
                }}><Text>{matriz[2][1]}</Text></Pressable>
                <Pressable style={styles.Pressable} onPress={() => {
                    handleClickB(2,2)
                }}><Text>{matriz[2][2]}</Text></Pressable>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    Pressable: {
        backgroundColor: "blue",
        width: 80,
        height: 50,  
        alignItems: "center",  
        justifyContent: "center",       
    },

    view: {
        flexDirection: "row",
        gap: 20, 
        margin: 10  
    }


});