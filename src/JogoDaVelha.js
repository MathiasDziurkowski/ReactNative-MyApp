import { useEffect, useState } from "react";
import { Stylesheet, View, Text, Button, StyleSheet, FlatList, Pressable } from "react-native";

export default function JogoDaVelha(props) {
    const [matriz, setMatriz] = useState(
        [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]
        ]
    )

    const[vezJogador,setVezJogador] = useState("X")
    const[vezPlayer,setVezPlayer] = useState(0);

    function FVezJogador() {
        if (vezJogador == "X"){
            setVezPlayer(1);
            setVezJogador("O")
        }
        else {
            setVezJogador("X")
            setVezPlayer(0)
        }
    }

    useEffect(() => {
        checarVitoria();
    }, [matriz]);


    const handleClickB = (matrizX, matrizY) => {
        if (matriz[matrizX][matrizY] == " "){ 
            const novaMatriz = [[...matriz[0]], [...matriz[1]], [...matriz[2]]]
                novaMatriz[matrizX][matrizY] = vezJogador;
                setMatriz(novaMatriz);
                FVezJogador()
            
        }
        
    }

    function checarVitoria() {
        if (matriz[0][0] == matriz[1][1] && matriz[1][1] == matriz[2][2] && matriz[0][0] != " "){
            mostrarVitoria()
        }
        if (matriz[0][0] == matriz[0][1] && matriz[0][1] == matriz[0][2] && matriz[0][0] != " "){
            mostrarVitoria()
        }
        if (matriz[1][0] == matriz[1][1] && matriz[1][1] == matriz[1][2] && matriz[1][0] != " "){
            mostrarVitoria()
        }
        if (matriz[2][0] == matriz[2][1] && matriz[2][1] == matriz[2][2] && matriz[2][0] != " "){
            mostrarVitoria()
        }
        if (matriz[0][0] == matriz[1][0] && matriz[1][0] == matriz[2][0] && matriz[0][0] != " "){
            mostrarVitoria()
        }
        if (matriz[0][1] == matriz[1][1] && matriz[1][1] == matriz[2][1] && matriz[0][1] != " "){
            mostrarVitoria()
        }
        if (matriz[0][2] == matriz[1][2] && matriz[1][2] == matriz[2][2] && matriz[0][2] != " "){
            mostrarVitoria()
        }
        if (matriz[0][2] == matriz[1][1] && matriz[1][1] == matriz[2][0] && matriz[0][2] != " "){
            mostrarVitoria()
        }   
    }
    const handleClick = (event) => {
        props.changeScreen("HomeJogo");
    }

    const mostrarVitoria = () => {
        if (vezJogador != "X"){
            alert("O jogador ganhador foi:" + props.player[0])
            props.changeScreen("HomeJogo")
        }
        else{
            alert("O jogador ganhador foi:" + props.player[1])
            props.changeScreen("HomeJogo")
        }
    }
    return (
        <View >
            <Text>Vez de: {props.player[vezPlayer]}</Text>
            <Text>Jogo da velha</Text>
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
        borderRadius: 20,
        justifyContent: "center",       
    },

    view: {
        flexDirection: "row",
        gap: 20, 
        margin: 10  
    }


});