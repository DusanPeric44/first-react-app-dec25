import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import data from "../data/countries.json";

export default class CountriesScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    this.setState({
      countries: data,
    });
  }

  render() {
    return (
      <View>
        <Text style={styles.screenTitle}> Countries Screen </Text>
        <FlatList
          data={this.state.countries}
          renderItem={({ item }) => (
            <View style={styles.cardWrapper}>
              <Text>City Name: {item.name}</Text>
              <Text>Country Name: {item.country}</Text>
              <Text>Country Description: {item.description}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 15,
    fontWeight: "bold",
  },
  cardWrapper: {
    backgroundColor: "#666",
    marginBottom: 10,
  },
});
