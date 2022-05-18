import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { Dimensions,  } from "react-native";
import { Button } from "react-native-elements";



const {width, height} = Dimensions.get("window");

const defaultStylesButton = {
  backgroundColor: "#ffffff",
  width: width * 0.85,
  height: height * 0.06,
  alignSelf: "center",
  marginTop: 10,
  padding: 2
};

function ButtonMain({ title, onPress, buttonStyle, disable }) {
  return (
    <View>
      <Button
        title={title}
        onPress={onPress}
        buttonStyle={Object.assign(defaultStylesButton, buttonStyle?.styles)}
        titleProps={{
          style: {
            letterSpacing: 2,
            fontWeight: "bold",
            fontSize: 17,
          },
        }}
        disabled={disable}
      />
    </View>
  );
}

export default ButtonMain;
