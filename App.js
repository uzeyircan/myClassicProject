import React from "react";
import LoginPage from "./src/screens/LoginPage";
import SignUpPage from "./src/screens/SignUpPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return;
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="SignUp" component={SignUpPage} />
    </Stack.Navigator>
  </NavigationContainer>;
};

export default App;
