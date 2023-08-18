import { StyleSheet } from "react-native";
import { FONTFAMILY, FONTSIZE, FONTWEIGHT, shadow } from "../../constants";
import {
  flexRowCenterBetween,
  flexRowStart,
  flexStart,
} from "../../constants/CustomStyle";
import { themes } from "../../constants/theme";
export const style = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: themes.light.white,
    backgroundColor: themes.light.white,
    ...shadow,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  topcontent: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
    paddingTop: 20,
  },
  timeicon: {
    fontSize: 25,
  },
  greeting: {
    fontFamily: "Inter-Black",
    fontSize: FONTSIZE.medium + 5,
  },
  greetingcaption: {
    fontSize: FONTSIZE.small - 1,
  },
  sortcover: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tabtitle: {
    fontSize: FONTSIZE.largeFont + 1,
    fontWeight: FONTWEIGHT.extraBold,
  },
  tabcover: {
    paddingBottom: 10,
    ...flexRowCenterBetween,
  },
  sorticon: {
    fontSize: FONTSIZE.medium,
  },
  editorcover: {
    padding: 5,
  },
  sectiontab: {
    backgroundColor: themes.light.white,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    ...shadow,
  },
  morebtn: {
    color: themes.light.primary,
  },
  tabcaption: {
    color: "#6c6c6c",
    paddingVertical: 3,
    paddingTop: 3,
    fontSize: FONTSIZE.medium - 1,
  },
});
