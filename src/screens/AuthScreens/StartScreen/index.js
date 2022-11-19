import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import "./style";
import style from "./style";
import Button from "../../../components/Button";
import Signin from "../Signin";

const StartScreen = () => {
  const [signinmodal, setsigninmodal] = useState(false);
  return (
    <ImageBackground
      style={style.container}
      source={{
        uri: "https://images.unsplash.com/photo-1633436375564-2cf3aaea70ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3BpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
      }}
    >
      <Modal visible={signinmodal} transparent={true} animationType="slide">
        <Signin closeBtn={setsigninmodal} />
      </Modal>
      <View style={style.content}>
        <View>
          <Text style={style.caption}>Get your favorite</Text>
          <Text style={style.caption}>food delivered.</Text>
        </View>
        <Button text={"Get started"} />
        <View
          style={{
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "row",
          }}
        >
          <Text style={style.authcaption}>Have an account? </Text>
          <TouchableOpacity style={{}} onPress={() => setsigninmodal(true)}>
            <Text style={style.authtext}> Sign in.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default StartScreen;
