import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./app/screens/Home";
import PokemonList from "./app/screens/PokemonList";

/*
export default function App() {
  return <Home />;
}
*/
const appNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  PokemonList: {
    screen: PokemonList
  }
});

/*
const styles = StyleSheet.create({
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
});
*/
export default createAppContainer(appNavigator);
