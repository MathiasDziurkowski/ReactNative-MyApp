import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import Home from './src/Home';
import Jogo from './src/JogoDaVelha';
import Forca from './src/Forca'
import HomeForca from './src/HomeForca';
import HomeJogo from './src/HomeJogo'



export default function App() {

  const [screen, setScreen] = useState("home");
  const [player1,setPlayer1] = useState("");
  const [player2,setPlayer2] = useState("");
  const [jogo, setJogo] = useState("");

  const checkScreen = (checkScreen) => checkScreen === screen;

  const setJogadores = (nome1, nome2) => {
    setPlayer1(nome1);
    setPlayer2(nome2);
  }
  const checkJogo = (checkJogo) => checkJogo === jogo;
  const changeScreen = (newScreen) => setScreen(newScreen);
  const changeJogo = (newJogo) => setJogo(newJogo);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {checkScreen("home") && <Home mudarNomeJogadores={setJogadores} changeScreen={changeScreen} />}
      {checkScreen("jogo") && checkJogo("velha") && <Jogo changeScreen={changeScreen} changeJogo={changeJogo} />}
      {checkScreen("HomeJogo") && <HomeJogo changeScreen={changeScreen} changeJogo={changeJogo}/>}
      {checkScreen("forca") && <Forca changeScreen={changeScreen} changeJogo={changeJogo}  />}
      {checkScreen("HomeForca") && <HomeForca changeScreen={changeScreen} changeJogo={changeJogo}/>}
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: "80%",
    height: 20,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1
    
  },
});
