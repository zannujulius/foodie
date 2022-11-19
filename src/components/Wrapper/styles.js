import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    position: "relative",
    overflow: "hidden",
  },
  wrapperbg: {
    position: "absolute",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    transform: [{ scale: 1.2 }],
  },
});
