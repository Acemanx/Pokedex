import React from "react";
import styles from "./styles";
import { Text, View } from "react-native";

class PokemonInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is pokemon info</Text>
      </View>
    );
  }
}

export default PokemonInfo;
