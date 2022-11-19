import { StyleSheet } from "react-native";
import { FONTSIZE, FONTWEIGHT } from "../../../constants";
import { themes } from "../../../constants/theme";
export const style = StyleSheet.create({
  editorcard: {
    marginHorizontal: 15,
  },
  editorimage: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: FONTSIZE.medium + 1,
    paddingTop: 8,
    fontWeight: FONTWEIGHT.bold,
  },
  category: {
    color: "#6c6c6c",
    fontSize: FONTSIZE.medium,
    paddingTop: 5,
  },
  price: {
    color: color.light.primary,
    fontWeight: FONTWEIGHT.bold,
    paddingTop: 8,
  },
});
