import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const ButtonScreen = () => {
  let counter = 0;
  let counter1 = 0;
  return (
    <View>
      <Text>Button Screen</Text>
      <Button
        title="Click me"
        color="purple"
        onPress={() => console.log("Button Clicked: ", counter++)}
      ></Button>
      <TouchableOpacity
        style={styles.touchableBtn}
        onPress={() => console.log("TouchableOpacity clicked: ", counter1++)}
      >
        <Text style={styles.txtStyle}>Click Touchable Element</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  touchableBtn: {
    backgroundColor: "purple",
    marginVertical: 15,
    padding: 20,
    borderRadius: 6,
    marginHorizontal: 20,
  },
  txtStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default ButtonScreen;
