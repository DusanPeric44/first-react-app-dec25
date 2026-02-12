import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MenuScreen = (props) => {
  console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>Welcome to Menu Screen</Text>
      <Button
        style={styles.btn}
        title="Go to List Screen"
        onPress={() => props.navigation.navigate("List")}
      />
      <Button
        style={styles.btn}
        title="Go to Students Screen"
        onPress={() => props.navigation.navigate("Students")}
      />
      <Button
        style={styles.btn}
        title="Go to Box Screen"
        onPress={() => props.navigation.navigate("Box")}
      />
      <Button
        style={styles.btn}
        title="Go to Posts Screen"
        onPress={() => props.navigation.navigate("Posts")}
      />
      <Button
        style={styles.btn}
        title="Go to Countries Screen"
        onPress={() => props.navigation.navigate("Countries")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
  },
  btn: {
    marginBottom: 20,
  },
});

export default MenuScreen;
