import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import PokemonList from "./app/screens/PokemonList";
import PokemonInfo from "./app/screens/PokemonInfo";
import Login from "./app/screens/Login";

const appNavigator = createStackNavigator({
  Home: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  PokemonList: {
    screen: PokemonList
  },
  PokemonInfo: {
    screen: PokemonInfo
  }
});

export default createAppContainer(appNavigator);
