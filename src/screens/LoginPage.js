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
import { CustomTextInput, Loading, CustomButton } from "../components";

const LoginPage = ({ navigation }) => {
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>

      <Image
        source={require("../../assets/images/loginIcon.png")}
        style={styles.image}
      />

      <CustomTextInput
        title="Email"
        isSecureText={false}
        handleOnChangeText={setEmail}
        handleValue={email}
        handlePlaceholder="Enter Your Email"
      />
      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleOnChangeText={setPassword}
        handleValue={password}
        handlePlaceholder="Enter Your Password"
      />
      <CustomButton
        buttonText="Login"
        setWidth="80%"
        handleOnPress={() => setIsLoading(true)}
        buttonColor="gray"
        pressedButtonColor="lightgray"
      />
      <CustomButton
        buttonText="Sign Up"
        setWidth="30%"
        handleOnPress={() => navigation.navigate("SignUp")}
      />

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
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
  },

  welcome: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    color: "white",
  },

  image: { width: 150, height: 150, marginBottom: 20 },
  signupButton: {
    borderWidth: 1,
    width: "30%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
