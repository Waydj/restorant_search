import React from "react";
import { ThemeProvider } from "styled-components/native";
import { StatusBar as StatusBarExpo } from "expo-status-bar";
import { theme } from "./src/infrastructure/theme";
import Navigation from "./src/infrastructure/navigation";
import { initializeApp } from "firebase/app";

import {
  useFonts as useFontsOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useFontsLato,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { getAuth } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAC9W4JFyLJ0ZZVafiUGqlUdONp9ceJyUQ",
  authDomain: "mealstogooo.firebaseapp.com",
  projectId: "mealstogooo",
  storageBucket: "mealstogooo.appspot.com",
  messagingSenderId: "666553210921",
  appId: "1:666553210921:web:1877f54000004126e6e438",
};

export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
//

export default function App() {
  const [oswaldloaded] = useFontsOswald({
    Oswald_400Regular,
  });
  const [latoloaded] = useFontsLato({
    Lato_400Regular,
  });

  if (!oswaldloaded || !latoloaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
      <StatusBarExpo style="auto" />
    </ThemeProvider>
  );
}
