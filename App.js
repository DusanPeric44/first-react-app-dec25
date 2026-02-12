import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./screens/MainScreen";
import ExcerciseScreen from "./screens/ExerciseScreen";
import ListScreen from "./screens/ListScreen";
import ButtonScreen from "./screens/ButtonScreen";
import MenuScreen from "./screens/MenuScreen";
import StudentsScreen from "./screens/StudentsScreen";
import BoxScreen from "./screens/BoxScreen";
import PostsScreen from "./screens/PostsScreen";
import CountriesScreen from "./screens/CountriesScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Main" component={MainScreen}></Stack.Screen>
        <Stack.Screen name="List" component={ListScreen}></Stack.Screen>
        <Stack.Screen
          name="Excercise"
          component={ExcerciseScreen}
        ></Stack.Screen>
        <Stack.Screen name="Home" component={MenuScreen}></Stack.Screen>
        <Stack.Screen name="Students" component={StudentsScreen} />
        <Stack.Screen name="Box" component={BoxScreen} />
        <Stack.Screen name="Posts" component={PostsScreen} />
        <Stack.Screen name="Countries" component={CountriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
