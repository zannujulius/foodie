import React, { useState, useContext } from "react";
import { Switch, View, useColorScheme } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

const SwitchButton = () => {
  const colorScheme = useColorScheme();
  const { setTheme, theme } = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((prevState) => !prevState);
    setTheme(() => setTheme(theme === "light" ? "dark" : "light"));
  };

  return (
    <Switch
      value={isEnabled}
      onValueChange={toggleSwitch}
      disabled={colorScheme === "dark"}
    />
  );
};

export default SwitchButton;
