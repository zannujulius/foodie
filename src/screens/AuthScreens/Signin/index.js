import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import Button from "../../../components/Button";
import React, { Component } from "react";
import { style } from "../style";
import { MaterialIcons } from "@expo/vector-icons";
import { color } from "../../../constants/theme";
import { flexCenter } from "../../../constants/CustomStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@react-navigation/native";

const Signin = ({ closeBtn }) => {
  let { navigate } = useNavigation();
  const { colors } = useTheme();

  return (
    <View style={style.container}>
      <View style={style.content}>
        <View>
          <View style={style.authtop}>
            <TouchableOpacity
              style={style.authclose}
              onPress={() => closeBtn(false)}
            >
              <Text style={style.closebtn}>Close</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={style.title}>Sign In</Text>
            <View style={style.authgroup}>
              <View style={style.authicon}>
                <MaterialIcons
                  name="alternate-email"
                  size={22}
                  color="#2b2b2b"
                />
              </View>
              <TextInput
                placeholder="Your email address"
                style={style.authinput}
              />
            </View>
            <View style={style.authgroup}>
              <View style={style.authicon}>
                <MaterialCommunityIcons
                  name="form-textbox-password"
                  size={22}
                  color="#2b2b2b"
                />
              </View>
              <TextInput placeholder="Your password" style={style.authinput} />
            </View>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            marginBottom: 120,
          }}
        >
          <View style={style.bottomcontent}>
            <Pressable
              onPress={() => {
                closeBtn(false);
                navigate("home");
              }}
            >
              <Button text={"Sign In"} />
            </Pressable>

            <View
              style={{
                width: "100%",
                marginVertical: 20,
                borderWidth: 0.3,
              }}
            ></View>
            <View style={style.oauthbtn}>
              <View
                style={{
                  ...flexCenter,
                  width: 26,
                  height: 26,
                }}
              >
                <Image
                  source={{
                    uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
                  }}
                  style={style.authimg}
                />
              </View>
              <Text style={style.oauthtext}>Continue with Google</Text>
            </View>
            <View style={style.oauthbtn}>
              <View
                style={{
                  ...flexCenter,
                  width: 26,
                  height: 26,
                }}
              >
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png",
                  }}
                  style={style.authimg}
                />
              </View>
              <Text style={style.oauthtext}>Continue with Facebook</Text>
            </View>
            <View style={style.oauthbtn}>
              <View
                style={{
                  ...flexCenter,
                  width: 26,
                  height: 26,
                }}
              >
                <Image
                  source={{
                    uri: "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png",
                  }}
                  style={style.authimg}
                />
              </View>
              <Text style={style.oauthtext}>Continue with Apple</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signin;
