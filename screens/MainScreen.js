import React from "react";
import { Text, StyleSheet, View } from "react-native";

const MainScreen = () => {
  // Single line comment
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is Main Screen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 24,
  },
});

export default MainScreen;
