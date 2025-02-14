import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";

import { useFonts } from "expo-font";
import GameOverScreen from "./src/screens/GameOverScreen";
import GameScreen from "./src/screens/GameScreen";
import StartGameScreen from "./src/screens/StartGameScreen";
import Colors from "./src/utils/colors";

// SplashScreen.preventAutoHideAsync();
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  // const [fontsLoaded] =
  useFonts({
    "open-sans": require("./src/utils/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./src/utils/fonts/OpenSans-Bold.ttf"),
  });

  // SplashScreen.setOptions({
  //   duration: 1000,
  //   fade: true,
  // });
  // if (fontsLoaded) {
  //   SplashScreen.hide();
  // }

  function pickNumberHandler(pickNumber) {
    setUserNumber(pickNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.screen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.screen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.screen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
