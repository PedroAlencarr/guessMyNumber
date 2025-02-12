import { Pressable, StyleSheet, Text, View } from "react-native";

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
};

function PrimaryButton({ label, onPress }: PrimaryButtonProps) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressedOnIoS]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#630434" }}
      >
        <Text style={styles.buttonText}>{label}</Text>
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
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  pressedOnIoS: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
