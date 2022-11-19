import { StyleSheet } from "react-native";
import { FONTSIZE, FONTWEIGHT } from "../../../constants";
import { flexColumnCenter } from "../../../constants/CustomStyle";
export const style = StyleSheet.create({
  container: {
    ...flexColumnCenter,
    marginHorizontal: 10,
  },
  text: {
    textAlign: "center",
  },
  title: {
    fontSize: FONTSIZE.medium - 1,
    paddingTop: 8,
    fontWeight: FONTWEIGHT.bold,
  },
});
