import { StyleSheet } from "react-native";
import { FONTSIZE, FONTWEIGHT } from "../../../constants";
import { color } from "../../../constants/theme";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 15,
  },
  content: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 60,
  },
  caption: {
    color: color.light.black,
    fontSize: FONTSIZE.xlarge + 10,
    textAlign: "center",
    lineHeight: 40,
    fontWeight: "bold",
    fontFamily: "Inter-Black",
  },
  authcaption: {
    color: color.light.black,
    fontSize: FONTSIZE.medium - 1,
    fontWeight: FONTWEIGHT.bold,
    marginTop: 10,
  },
  authtext: {
    color: color.light.primary,
    textDecorationLine: "underline",
    fontWeight: FONTWEIGHT.bold,
    fontSize: FONTSIZE.medium,
  },
});

export default style;
