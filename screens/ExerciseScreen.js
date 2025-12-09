import React from "react";
import { Text, StyleSheet, View } from "react-native";

// JSX - Next Generation JavaScript

const ExcerciseScreen = () => {
  // Deklaracija varijable koristeći let
  let message = "Hi there!";

  // Dodjela nove vrijednosti
  message = "Hi there from Digital School";

  return (
    <View>
      <Text style={styles.bigText}>{message}</Text>
      <Text>Drugi tekst</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bigText: {
    fontSize: 24,
  },
});

export default ExcerciseScreen;
