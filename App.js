import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

import StartGameScreen from "./src/screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient colors={["#54042c", "#ddb52f"]} style={styles.screen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMethod="cover"
        style={styles.screen}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
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
