import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList, ScrollView } from "react-native";
import data from "../data/products.json";
import Product from "../components/Product";

export default class ProductsScreen extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.setState({
      products: data,
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Top products of 2020</Text>
          <FlatList
            data={this.state.products}
            renderItem={({ item }) => (
              <View>
                <Product
                  name={item.name}
                  category={item.category}
                  price={item.price}
                  stock={item.stock}
                  img={item.image}
                  desc={item.description}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginVertical: 20,
    fontWeight: "bold",
  },
  container: {
    alignItems: "center",
  },
});
