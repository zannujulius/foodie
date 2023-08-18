import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
// import style from "./style";
import { themes } from "../../constants/theme";
import { style } from "./styles";
import { FONTSIZE } from "../../constants";

const Button = ({ text, loading }) => {
  return (
    <View
      style={[
        style.button,
        {
          backgroundColor: themes.light.primary,
          height: 51,
          width: "100%",
          marginVertical: 5,
        },
      ]}
    >
      {loading ? (
        <ActivityIndicator size={"small"} color={themes.light.white} />
      ) : (
        <Text
          style={[
            style.text,
            {
              color: "cornsilk",
              fontSize: FONTSIZE.medium,
              //   fontFamily: "Inter-Black",
            },
          ]}
        >
          {text}
        </Text>
      )}
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({});
