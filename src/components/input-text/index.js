import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Dimensions,
} from "react-native";






const InputText = (
 { placeholder,
  type,
  stylesTextInput = {},
  secureText,
  editable,
  value,
  onChangeText,
  onKeyPress,
  autoFocus,
  onChange,
  autoCapitalize,
}
) => {
  return (
    <SafeAreaView>
      <TextInput
          editable={editable}
        value={value}
        style={styles.input}
        placeholder={placeholder}
        keyboardType={type}
        autoCapitalize={autoCapitalize}
        autoFocus={autoFocus}
        keyboardAppearance="default"
        secureTextEntry={secureText}
        onChangeText={onChangeText}
        onKeyPress={onKeyPress}
        onChange={onChange}
      />
    </SafeAreaView>
  );
}; 

const { height, width } = Dimensions.get("window");

const styles = 
  StyleSheet.create({
    input: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      alignContent: "center",
      alignSelf: "center",
      padding: height * 0.01,
      borderRadius: 5,
      backgroundColor: "#fff",
      borderWidth: 0.5,
      borderStyle: "solid",
      borderColor: "#4A4A68",
      color: "#4A4A68",
      width: width * 0.85,
      height: height * 0.06,
      marginBottom:'4%',
    },
  });

export default InputText;
