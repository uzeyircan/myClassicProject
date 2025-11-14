import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { useState } from "react";
import Loading from "../components/Loading";

const LoginPage = (navigation) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/loginIcon.png")}
        style={styles.image}
      />

      <Text>Welcome {result}</Text>
      <Text>Email</Text>
      <TextInput
        inputMode="email"
        placeholder="Enter Your Email "
        style={styles.textInputStyle}
        onChangeText={setName}
        value={name}
      />
      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        placeholder="Enter Your Password"
        style={styles.textInputStyle}
        onChangeText={setLastName}
        value={lastName}
      />
      <Pressable
        onPress={() => setIsLoading(true)}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "gray" : "lightblue",
          },
          styles.button,
        ]}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("SignUp")}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "gray" : "lightblue",
            marginTop: 50,
          },
          styles.signupButton,
        ]}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>

      {isLoading ? (
        <Loading changeIsLoading={() => setIsLoading(false)} />
      ) : null}
    </View>
  );
};
export default LoginPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputStyle: {
    borderWidth: 1,
    width: "80%",
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
  },
  button: {
    borderWidth: 1,
    width: "80%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
  image: { width: 100, height: 100 },
  signupButton: {
    borderWidth: 1,
    width: "30%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
