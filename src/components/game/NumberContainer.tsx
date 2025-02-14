import { StyleSheet, Text, View } from "react-native";
import Colors from "../../utils/colors";

type NumberContainerProps = {
  children: number;
};

function NumberContainer({ children }: NumberContainerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});
