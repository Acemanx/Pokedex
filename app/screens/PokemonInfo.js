import React from "react";
import styles from "./styles";
import { Text, View } from "react-native";

class PokemonInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  getPokemonInfo() {}

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.navigation.getParam("name")}</Text>
      </View>
    );
  }
}

export default PokemonInfo;
