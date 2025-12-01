import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
const firebaseConfig = {
  apiKey: "AIzaSyDk3pRnYrVVlZqmoOCEhRX5Z-AASvX331E",
  authDomain: "tet-app-8adb3.firebaseapp.com",
  projectId: "tet-app-8adb3",
  storageBucket: "tet-app-8adb3.firebasestorage.app",
  messagingSenderId: "223930031556",
  appId: "1:223930031556:web:5b4dcb65eeac9906c85891",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeApp(app, {
  persistance: getReactNativePersistence(ReactNativeAsyncStorage),
});
export default app;
