import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10
  },
  warning: {
    fontSize: 20,
    alignSelf: "center",
    marginBottom: 20,
  },
  cancel: {
    borderWidth: 0.5,
    borderColor: "grey",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "rgba(50, 50, 50, 0.3)",
  },
  confirm: {
    borderWidth: 0.5,
    borderColor: "green",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "rgba(100, 255, 100, 0.7)",
  },
  dialog: {
    position: "absolute",
    backgroundColor: "rgba(50, 50, 50, 0.4)",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  dialogbox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    justifyContent: "space-between"
  },
});

export default styles;
