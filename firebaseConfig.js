// src/firebase/firebaseConfig.js

import { initializeApp, getApps, getApp } from "firebase/app";
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

// 🔹 Uygulama zaten başlatılmış mı kontrol et
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// 🔹 React Native için Auth + AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth };
export default app;
