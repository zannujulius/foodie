import { View, Text, Pressable } from "react-native";
import React from "react";
import { style } from "./style";
import { themes } from "../../../constants/theme";

const SortPill = ({ title, setsort, sort }) => {
  return (
    <Pressable
      onPress={() => setsort(title)}
      style={[
        style.pill,
        {
          borderWidth: title == sort ? 0 : 1,
          backgroundColor:
            title == sort ? themes.light.primary : themes.light.white,
        },
      ]}
    >
      <Text
        style={[
          style.text,
          {
            color: title == sort ? themes.light.white : "#6c6c6c",
          },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default SortPill;
