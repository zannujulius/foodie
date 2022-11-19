import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { flexCenter, flexRow } from "../../../constants/CustomStyle";
import { style } from "./style";
import { themes } from "../../../constants/theme";
import { AntDesign } from "@expo/vector-icons";

const OptionCard = () => {
  return (
    <TouchableOpacity style={style.container}>
      <View>
        <Text style={style.name}>Burger joint</Text>
        <Text style={style.caption}>Deli, Bagel, Sandwich</Text>
        <View
          style={{
            ...flexRow,
            marginTop: 5,
          }}
        >
          <Text style={style.price}>$4.22</Text>
          <Text style={style.time}>4 - 5mins.</Text>
          <View
            style={{
              ...flexRow,
            }}
          >
            <View
              style={{
                ...flexCenter,
              }}
            >
              <AntDesign name="star" size={15} color={themes.light.primary} />
            </View>
            {/* <EvilIcons name="star" size={20} color={themes.light.primary} /> */}
            <Text style={style.time}>4.2 (62)</Text>
          </View>
        </View>
      </View>
      <View>
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 5,
          }}
          source={{
            uri: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default OptionCard;
