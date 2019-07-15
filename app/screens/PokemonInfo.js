import React from "react";
import styles from "./styles";
import { Text, View, Image, ActivityIndicator, StyleSheet } from "react-native";
import * as Constants from "../constants/Constants";
import { LinearGradient } from "expo-linear-gradient";

export default class PokemonInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonID: "",
      name: "",
      type: [],
      moves: [],
      movesUrl: "",
      height: "",
      weight: ""
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
  logOut() {}
  getPokemonInfo() {
    const api = `${Constants.POKEMON_INFO}${this.state.name}`;
    fetch(api)
      .then(res => res.json())
      .then(res => {
        const types = [];
        res.types.forEach(element => {
          types.push(element.type.name);
        });
        this.setState(
          {
            pokemonID: res.sprites.front_default,
            type: types,
            movesUrl: res.types[0].type.url,
            weight: res.weight,
            height: res.height
          },
          () => {
            console.warn(this.state);
            this.getPokemonMoves();
          }
        );
      });
  }
  getPokemonMoves() {
    const apiMoves = this.state.movesUrl;

    fetch(apiMoves)
      .then(res => res.json())
      .then(res => {
        const movements = [];
        res.moves.slice(0, 6).forEach(move => {
          movements.push(move.name);
        });
        this.setState({
          moves: movements
        });
        console.warn(movements);
      });
  }

  render() {
    return (
      <LinearGradient
        colors={["rgba(61, 125, 202, 1)", "transparent"]}
        style={styles.pokemonInfoCard}
      >
        <Image
          source={require("../../assets/pokemon_logo.png")}
          style={{ width: 300, height: 110 }}
        />
        {this.state.pokemonID ? (
          <Image
            source={this.state.pokemonID ? { uri: this.state.pokemonID } : null}
            style={{ width: 200, height: 170 }}
          />
        ) : (
          <ActivityIndicator size="large" />
        )}
        <Text style={styles.titleText}>{this.state.name}</Text>

        <Text>
          {Constants.WEIGHT}
          {this.state.weight}
          {Constants.POUNDS}
        </Text>
        <Text>
          {Constants.HEIGHT}
          {this.state.height}
          {Constants.HEIGHT_VALUE}
        </Text>
        <View style={styles.row}>
          {this.state.type.map(key => {
            const colorText = Constants.TYPES_COLORS[key];
            return (
              <View
                style={StyleSheet.flatten([
                  styles.typeContainer,
                  { backgroundColor: colorText }
                ])}
              >
                <Text style={styles.typeText}>{key}</Text>
              </View>
            );
          })}
        </View>
        <Text style={styles.titleMoves}>{Constants.MOVES}</Text>
        <View style={styles.row}>
          {this.state.moves.map(key => {
            return (
              <View style={styles.boxStyle}>
                <Text style={styles.informationText}>{key}</Text>
              </View>
            );
          })}
        </View>
      </LinearGradient>
    );
  }
}
