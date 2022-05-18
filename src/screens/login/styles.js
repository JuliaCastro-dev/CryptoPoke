import {
  StyleSheet,
} from "react-native";

const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD600',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer:{
      display: "flex",
      flexDirection:'row',
      justifyContent:'center',
      width: '50%',
      padding: 5,
      marginBottom:'5%'
  },
  cryptoText:{
      fontWeight:'600',
      fontSize:27,
      textTransform:'uppercase'
  },
   pokeText:{
      fontWeight:'600',
      fontSize:27,
      color: '#ffffff',
        textTransform:'uppercase'
  }
});

export const { container, titleContainer, cryptoText, pokeText } = stylesLogin;
export default stylesLogin;