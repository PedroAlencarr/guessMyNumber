import { Pressable, StyleSheet, Text, View } from "react-native";

import Colors from "../../utils/colors";

type PrimaryButtonProps = {
  children: string | React.ReactNode;
  onPress: () => void;
};

function PrimaryButton({ children, onPress }: PrimaryButtonProps) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressedOnIoS]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#ffff",
    fontSize: 16,
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
  pressedOnIoS: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
