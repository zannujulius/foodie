import { StyleSheet } from "react-native";
import { flexStart } from "./CustomStyle";
export const globalStyles = StyleSheet.create({
  formgroup: {
    borderWidth: 1,
    width: "100%",
    height: 57,
    borderRadius: 5,
    ...flexRow,
    paddingHorizontal: 10,
    marginTop: 25,
  },
  formcover: {
    width: "100%",
  },
  forminput: {
    width: "80%",
    fontSize: FONTSIZE.medium - 2,
  },
  formbtncover: {
    marginTop: 10,
  },
  authtopcover: {
    ...flexRow,
  },
  authtopleftcover: {
    width: "85%",
  },
  newformgroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
    borderBottomColor: color.secondaryColor,
    // borderWidth: 1,
    // borderColor: color.borderColor,
    borderBottomWidth: 1,
    marginVertical: 10,
    height: 55,
    // width: "100%",
  },
  authbtncover: {
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
});
