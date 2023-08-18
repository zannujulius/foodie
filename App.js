import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useColorScheme,
  ActivityIndicator,
} from "react-native";
import StartScreen from "./src/screens/AuthScreens/StartScreen";
import { useFonts } from "expo-font";
import React, { useCallback, useContext, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import { EventRegister } from "react-native-event-listeners";

const Stack = createNativeStackNavigator();

// Theme
import CustomComponent from "./src/screens/CustomerComponent";
import { ThemeContext } from "./src/context/ThemeContext";
import { flexColumnCenter } from "./src/constants/CustomStyle";
import { getToken } from "./src/utils/token";
import * as SecureStore from "expo-secure-store";
import { themes } from "./src/constants/theme";
import Signup from "./src/screens/AuthScreens/Signup";

export default function App() {
  const [mode, setMode] = useState(false);
  const [loading, setloading] = useState(false);
  let color = useColorScheme();

  useEffect(() => {
    (async () => {
      try {
        let localTheme = await getToken("theme");

        localTheme == "true" ? setMode(true) : setMode(false);
        let eventListener = EventRegister.addEventListener(
          "changeTheme",
          (data) => {
            setMode(data);
          }
        );
      } catch (err) {
        console.log(err.message);
      }
    })();

    return () => {
      EventRegister.removeAllListeners();
    };
  }, []);
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/NoticiaText-Bold.ttf"),
    "Inter-Black-Italic": require("./assets/fonts/NoticiaText-BoldItalic.ttf"),
    "Inter-Black-Normal": require("./assets/fonts/NoticiaText-Italic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  if (loading) {
    return (
      <View
        style={{
          backgroundColor: color == "dark" ? "black" : "white",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator
          size={"small"}
          color={color == "dark" ? "white" : "dark"}
        />
      </View>
    );
  }

  return (
    <ThemeContext.Provider value={mode === true ? themes.dark : themes.light}>
      <NavigationContainer theme={mode == true ? DarkTheme : DefaultTheme}>
        <StatusBar style="dark" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="onboarding" component={StartScreen} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
