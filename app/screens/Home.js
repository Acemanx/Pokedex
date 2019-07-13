import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Home = ({ navigation }) => (
  <View style={[styles.container]}>
    <Text>Welcome to Pokedex</Text>

    <Button
      title="Go to list"
      onPress={() => navigation.navigate("PokemonList")}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Home;
