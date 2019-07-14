import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import styles from "./styles";
const Home = ({ navigation }) => (
  <View style={[styles.container]}>
    <Text>Welcome to Pokedex</Text>

    <Button
      title="Go to list"
      onPress={() => navigation.navigate("PokemonList")}
    />
  </View>
);

export default Home;
