import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const CustomButton = ({
  buttonText,
  setWidth,
  handleOnPress,
  buttonColor,
  pressedButtonColor,
}) => {
  return (
    <Pressable
      onPress={() => handleOnPress()}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? { pressedButtonColor } : { buttonColor },
          width: { setWidth },
        },
        styles.button,
      ]}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 24,
  },
  buttonText: {
    color: "#000000",
    fontWeight: "600",
    fontSize: 16,
  },
});
