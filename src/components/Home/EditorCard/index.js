import { View, Text, Image } from "react-native";
import React from "react";
import { style } from "./style";

const EditorCard = ({ name, category, price }) => {
  return (
    <View style={style.editorcard}>
      <View style={style.editorimage}>
        <Image
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 20,
          }}
          source={{
            uri: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWlsa3NoYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
          }}
        />
      </View>
      <View>
        <Text style={style.name}>Hot Caramel Latte</Text>
        <Text style={style.category}>Coffee</Text>
        <Text style={style.price}>$5.90</Text>
      </View>
    </View>
  );
};

export default EditorCard;
