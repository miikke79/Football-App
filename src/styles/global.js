import { StyleSheet } from "react-native";
import Constants from "expo-constants";
export const globalStyles = StyleSheet.create({
  // C O N T A I N E R S

  homeContainer: {
    flex: 1,
    backgroundColor: "#0C2340",
    alignItems: "center",
    justifyContent: "center",
  },

  loginContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#0C2340",
    alignItems: "center",
  },

  scrollContainer: {
    width: "100%",
  },

  listContainer: {
    flex: 1,
    backgroundColor: "#0C2340",
    color: "gold",
    marginTop: 25,
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
  },

  listTextContainer: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
  },

  scoresButtonContainer: {
    flexDirection: "row",
  },

  tableContainerB: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    backgroundColor: "gold",
    width: "100%",
  },

  inputContainer: {
    paddingTop: 50,
  },

  textContainer: {
    flex: 1,
    backgroundColor: "#0C2340",
    borderTop: 4,
  },

  tableSplit: {
    height: 1,
    width: "80%",
    backgroundColor: "#0C2340",
    marginLeft: "10%",
  },

  //  T E X T S

  title: {
    fontSize: 30,
    color: "white",
    marginTop: 15,
  },

  touchableText_PRIMARY: {
    color: "gold",
    fontWeight: "bold",
    fontSize: 16,
  },

  touchableText_TERTIARY: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 16,
  },

  tableText: {
    fontSize: 20,
    backgroundColor: "#0C2340",
    color: "gold",
    marginTop: 15,
    marginBottom: 15,
    borderColor: "#0C2340",
  },

  liveText: {
    fontSize: 20,
    backgroundColor: "#0C2340",
    color: "lightgreen",
    marginTop: 15,
    marginBottom: 15,
    borderColor: "#0C2340",
  },

  mediumText: {
    fontSize: 16,
    backgroundColor: "#0C2340",
    color: "gold",
    marginTop: 2,
    marginBottom: 2,
    borderColor: "#0C2340",
  },

  smallText: {
    fontSize: 12,
    backgroundColor: "#0C2340",
    color: "gold",
    marginTop: 2,
    marginBottom: 2,
    borderColor: "#0C2340",
  },

  listText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "gold",
    marginLeft: 20,
    marginRight: 20,
  },

  listTextB: {
    fontSize: 18,
    fontWeight: "bold",
    color: "gold",
    marginRight: 20,
  },

  // I N P U T

  inputField: {
    borderWidth: 1,
    borderColor: "#5F7161",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    width: 200,
    backgroundColor: "gold",
  },

  // B U T T O N

  buttonField_PRIMARY: {
    borderWidth: 1,
    borderColor: "gold",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    width: 200,
    backgroundColor: "#0C2340",
    alignItems: "center",
  },

  buttonField_TERTIARY: {
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 40,
    width: 200,
    backgroundColor: "#0C2340",
    alignItems: "center",
  },

  // T A B L E S

  dataHeader: {
    flex: 3,
    justifyContent: "center",
  },

  dataTable: {
    flex: 3,
  },

  // I M A G E S

  pictures: {
    width: 30,
    height: 30,
    borderColor: "#d35647",
    resizeMode: "contain",
  },

  homePictures: {
    width: 200,
    height: 200,
    borderColor: "#d35647",
    resizeMode: "contain",
  },

  statsPictures: {
    width: 100,
    height: 100,
    borderColor: "#d35647",
    resizeMode: "contain",
  },

  loginIcon: {
    width: "70%",
    height: 200,
    maxWidth: 300,
    borderColor: "#d35647",
    resizeMode: "contain",
    alignItems: "center",
  },
});
