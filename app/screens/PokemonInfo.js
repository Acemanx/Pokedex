import React from "react";
import styles from "./styles";
import { Text, View, Image, ActivityIndicator } from "react-native";
import * as URLS from "../constants/Constants";

class PokemonInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pokemonID: "",
      weight: "",
      abilities: ""
    };
    this.getPokemonInfo = this.getPokemonInfo.bind(this);
  }
  componentDidMount() {
    const pokemonName = this.props.navigation.getParam("name");
    this.setState(
      {
        name: pokemonName
      },
      () => {
        this.getPokemonInfo();
      }
    );
  }

  getPokemonInfo() {
    //console.warn(URLS.POKEMON_INFO);
    // console.warn("statename" + state.name);
    const api = `${URLS.POKEMON_INFO}${this.state.name}`;
    fetch(api)
      .then(res => res.json())
      .then(res =>
        this.setState(
          {
            pokemonID: res.sprites.front_default
          },
          () => {
            console.warn(this.state);
          }
        )
      );
  }

  render() {
    return (
      /* <View style={styles.container}>
        <Text>{this.props.navigation.getParam("name")}</Text>
      </View>*/
      <View style={styles.container}>
        {this.state.pokemonID ? (
          <Image
            source={this.state.pokemonID ? { uri: this.state.pokemonID } : null}
            style={{ width: 150, height: 150 }}
          />
        ) : (
          <ActivityIndicator size="large" />
        )}
        <Text>{this.state.name}</Text>
      </View>
    );
  }
}

export default PokemonInfo;
