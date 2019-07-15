import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

const Home = ({ navigation }) => (
  <View style={[styles.container]}>
    <Text>Welcome to Pokedex</Text>

    <Button
      title="Go to list"
      onPress={() => navigation.navigate("PokemonList")}
    />

    <Button onPress={this.props.onLogoutPress} title="Logout" />
  </View>
);

export default Home;
