import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

  // C O N T A I N E R S

  homeContainer: {
    flex: 1,
    backgroundColor: '#0C2340',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#0C2340',
    alignItems: 'center',
  },

  inputContainer: {
    paddingTop: 50,
  },

  textContainer: {
    flex: 1,
    backgroundColor: '#0C2340',
    borderTop: 4,
  },

  //  T E X T S

  title: {
    fontSize:30,
    color:'white',
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
    alignItems: 'center',
  },

  buttonField_TERTIARY: {
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 40,
    width: 200,
    backgroundColor: "#0C2340",
    alignItems: 'center',
  },

  // I M A G E S

  pictures: {
    width:30,
    height:30,
    borderColor:'#d35647',
    resizeMode:'contain',
  },

  homePictures: {
    width:200,
    height:200,
    borderColor:'#d35647',
    resizeMode:'contain',
  },

  loginIcon: {
    width:'70%',
    height:200,
    maxWidth:300,
    borderColor:'#d35647',
    resizeMode:'contain',
    alignItems: 'center',
  },

});