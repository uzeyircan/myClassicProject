import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Pressable,
} from "react-native";
import React from "react";

export default function Loading({ changeIsLoading }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => changeIsLoading()}
        style={[{}, styles.closeButtonContainer]}
      >
        <Text style={styles.closeButton}>X</Text>
      </Pressable>
      <ActivityIndicator size={"large"} color={"blue"} />
      <Text style={styles.loginText}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "tomato",
  },

  loginText: {
    fobntWeight: "bold",
    fontSize: 16,
    color: "white",
    marginTop: 20,
  },
  closeButtonContainer: {
    backgroundColor: "black",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    position: "absolute",
    top: 50,
    right: 30,
  },
  closeButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
