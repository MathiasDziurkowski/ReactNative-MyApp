import { useState } from "react";
import { Pressable } from "react-native";

export default function Memoria(props) {

    const [matriz, setMatriz] = useState([
        ["","",""]
        ["","",""]
        ["","",""]
        ["","",""]  
    ])


    function handleClick() {
    }

    return(
        <View>
        <Pressable onPress={handleClick}>

        </Pressable>
        </View>
    )
}