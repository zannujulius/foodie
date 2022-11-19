import { View, Text, Image } from "react-native";
import React from "react";
import { style } from "./style";

const CategoryCard = () => {
  return (
    <View style={style.container}>
      <View style={style.image}>
        <Image
          style={{
            width: 90,
            height: 90,
            borderRadius: 50,
          }}
          source={{
            uri: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
          }}
        />
      </View>
      <Text style={style.title}>Pizza</Text>
    </View>
  );
};

export default CategoryCard;
