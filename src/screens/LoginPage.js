import { StyleSheet, Image, Text, View } from "react-native";
import { CustomTextInput, Loading, CustomButton } from "../components";
import { login } from "../redux/userSlice";

import { useSelector, useDispatch } from "react-redux";
import { setIsloading, setLogin } from "../redux/userSlice";
import { useState } from "react";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  // userSlice içerisindeki verilerin okunması
  const { isLoading } = useSelector((state) => state.user);
  // userSlice içerisindeki reducer yapılarını kullanma veya veri gönderme
  const dispatch = useDispatch();

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
        handleOnChangeText={(text) => setEmail(text)}
        handleValue={email}
        handlePlaceholder="Enter Your Email"
      />
      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleOnChangeText={(password) => setPassword(password)}
        handleValue={password}
        handlePlaceholder="Enter Your Password"
      />
      <CustomButton
        buttonText="Login"
        setWidth="80%"
        handleOnPress={() => dispatch(login({ email, password }))}
        buttonColor="blue"
        pressedButtonColor="lightgray"
      />
      <CustomButton
        buttonText="Sign Up"
        setWidth="30%"
        handleOnPress={() => navigation.navigate("SignUp")}
        buttonColor="gray"
        pressedButtonColor="lightgray"
      />

      {isLoading ? (
        <Loading changeIsLoading={() => dispatch(setIsloading(false))} />
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
