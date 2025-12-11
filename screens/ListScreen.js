import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const students = [
  { name: "Gabriel", surname: "Rocha", age: "17" },
  { name: "Kaylen", surname: "Tyler", age: "15" },
  { name: "Ellie", surname: "Mcclure", age: "17" },
  { name: "Journey", surname: "Blackburn", age: "16" },
];

const ListScreen = () => {
  return (
    <View>
      <Text>List of Students</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(student) => student.name}
        data={students}
        renderItem={({ item }) => {
          return (
            <Text>
              {item.name} {item.surname} - {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ListScreen;

// Mini Challenge 3
// Ask students to create a Screen(Component) that will include an array of data.
// The data will need to be rendered using FlatList Element. Ask them to design the
// FlatList in different ways. The items should have a unique key. The screen should be
// rendered in the App.
