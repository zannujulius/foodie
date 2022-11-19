import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { styles } from "./styles";

const Wrapper = ({ children, bgColor, top }) => {
  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
  return (
    <View
      style={[
        styles.wrapper,
        {
          backgroundColor: bgColor || "#f4f4f4",
        },
      ]}
    >
      {children}
    </View>
  );
};

export default Wrapper;
