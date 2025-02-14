import { StyleSheet, Text, View } from "react-native";
import Colors from "../../utils/colors";

function GuessLogItem({ guess, roundNumber }) {
  return (
    <View style={styles.guessLogContainer}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  guessLogContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 10,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
  },
  itemText: {
    fontFamily: "open-sans",
    color: Colors.white,
  },
});

export default GuessLogItem;
