import { Platform, StyleSheet, Text } from "react-native";
import Colors from "../../utils/colors";

type TitleProps = {
  children: string;
};

function Title({ children }: TitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.white,
    textAlign: "center",
    borderWidth: Platform.select({ android: 2, ios: 0 }),
    borderColor: Colors.white,
    padding: 12,
    maxWidth: "80%",
  },
});

export default Title;
