import { StyleSheet } from "react-native";
import { FONTSIZE, FONTWEIGHT } from "../../../constants";
import { flexRowCenterBetween } from "../../../constants/CustomStyle";

export const style = StyleSheet.create({
  container: {
    ...flexRowCenterBetween,
    marginVertical: 8,
  },
  name: {
    fontSize: FONTSIZE.medium,
    fontWeight: FONTWEIGHT.bold,
    paddingBottom: 2,
  },
  time: {
    fontSize: FONTSIZE.small,
    color: "#6c6c6c",
    marginHorizontal: 5,
  },
  caption: {
    color: "#a0a0a0",
    paddingBottom: 2,
    fontSize: FONTSIZE.medium - 1,
  },
});
