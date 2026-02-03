import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        alignContent: "stretch",
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          width: 50,
          height: 150,
          backgroundColor: "powderblue",
        }}
      ></View>
      <View
        style={{ width: 50, height: 150, backgroundColor: "skyblue" }}
      ></View>
      <View
        style={{ width: 50, height: 150, backgroundColor: "steelblue" }}
      ></View>
      <View style={{ width: 50, height: 150, backgroundColor: "red" }}></View>
      <View style={{ width: 50, height: 150, backgroundColor: "green" }}></View>
      <View
        style={{ width: 50, height: 150, backgroundColor: "yellow" }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BoxScreen;
