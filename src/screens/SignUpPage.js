import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { CustomTextInput, CustomButton } from "../components";

const SignUpPage = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Image
          style={styles.image}
          source={require("../../assets/images/SignUpİcon.png")}
        />
        <Text style={styles.signUp}>Sign Up</Text>
      </View>
      <View style={styles.textInputContainer}>
        <CustomTextInput
          title="Name"
          isSecureText={false}
          handleOnChangeText={setName}
          handleValue={name}
          handlePlaceholder="Enter Your Name"
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
          handlePlaceholder="Create Your Password"
        />
      </View>
      <View style={styles.loginOptions}>
        <CustomButton
          buttonText="Sign Up"
          setWidth="80%"
          buttonColor="blue"
          pressedButtonColor="gray"
          handleOnPress={() => console.log(name, " ", email, " ", password)}
        />
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={{ fontWeight: "bold" }}>
            Already have an account? Login
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "tomato",
  },
  signUp: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    color: "white",
  },
  title: {
    flex: 2,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  textInputContainer: {
    flex: 2,
    paddingVertical: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  loginOptions: {
    flex: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  image: { width: 100, height: 100, marginBottom: 20 },
});
