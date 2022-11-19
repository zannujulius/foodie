import React, { useContext, useState } from "react";
import { useTheme } from "@react-navigation/native";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Switch,
  useColorScheme,
} from "react-native";
import { EventRegister } from "react-native-event-listeners";
import { ThemeContext } from "../context/ThemeContext";
import { setToken } from "../utils/token";

export default function CustomComponent() {
  const [mode, setMode] = useState(false);
  const theme = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: theme.color,
          },
        ]}
      >
        Welcome to home screen
      </Text>
      <View>
        <Switch
          value={mode}
          onValueChange={async (value) => {
            console.log(value, "///////");
            setMode(value);
            if (value) {
              await setToken("theme", "true");
            } else {
              await setToken("theme", "false");
            }
            EventRegister.emit("changeTheme", value);
          }}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {},
});
