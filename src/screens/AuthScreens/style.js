import { StyleSheet } from "react-native";
import { FONTSIZE, FONTWEIGHT, shadow } from "../../constants";
import {
  flexCenter,
  flexRow,
  flexRowEnd,
  flexRowStart,
} from "../../constants/CustomStyle";
import { color } from "../../constants/theme";
export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  content: {
    textAlign: "center",
    width: "100%",
    height: "90%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    backgroundColor: color.light.white,
    alignItems: "center",
    justifyContent: "space-between",
  },
  authgroup: {
    ...flexRowStart,
    height: 50,
    borderRadius: 5,
    borderBottomColor: "#97b2a2",
    borderBottomWidth: 1,
    marginTop: 20,
  },
  authinput: {
    width: "90%",
    height: "100%",
    paddingHorizontal: 10,
  },
  authicon: {
    width: "10%",
    height: "100%",
    ...flexCenter,
  },
  authtop: {
    width: "100%",
    ...flexRowEnd,
  },
  closebtn: {
    fontSize: FONTSIZE.medium - 1,
    color: color.light.primary,
    padding: 6,
  },
  authclose: {
    width: 70,
    ...flexCenter,
  },
  authimg: {
    width: "100%",
    height: "100%",
  },
  oauthbtn: {
    height: 50,
    ...flexCenter,
    borderRadius: 5,
    backgroundColor: color.light.white,
    ...shadow,
    marginVertical: 8,
  },
  oauthtext: {
    fontSize: FONTSIZE.medium - 2,
    fontWeight: FONTWEIGHT.bold,
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: "800",
    fontSize: FONTSIZE.xlarge + 5,
  },
});
