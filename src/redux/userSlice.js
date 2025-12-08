// src/redux/userSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; // 🔹 yol tam olarak böyle olmalı

// Firebase user nesnesini sade ve JSON'a uygun hale getiriyoruz
const mapFirebaseUser = (fbUser) => {
  if (!fbUser) return null;
  return {
    uid: fbUser.uid,
    email: fbUser.email,
    displayName: fbUser.displayName ?? null,
    emailVerified: fbUser.emailVerified,
    isAnonymous: fbUser.isAnonymous,
    photoURL: fbUser.photoURL ?? null,
  };
};

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const fbUser = userCredential.user;

      // Tokeni güvenli yoldan al
      const token = await fbUser.getIdToken();

      return {
        token,
        user: mapFirebaseUser(fbUser),
      };
    } catch (err) {
      console.log("userSlice login error:", err);
      return rejectWithValue(err.message || "Login failed");
    }
  }
);

const initialState = {
  isLoading: false,
  isAuth: false,
  token: null,
  user: null,
  error: null,
  email: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.toLowerCase();
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isAuth = false;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuth = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export const { setEmail, setPassword, logout } = userSlice.actions;
export default userSlice.reducer;
