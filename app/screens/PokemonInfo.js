import React from "react";
import styles from "./styles";
import { Text, View, Image, ActivityIndicator, Header } from "react-native";
import * as URLS from "../constants/Constants";

export default class PokemonInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pokemonID: "",
      weight: "",
      type: [],
      moves: [],
      movesUrl: ""
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
      .then(res => {
        const types = [];
        res.types.forEach(element => {
          types.push(element.type.name);
        });
        this.setState(
          {
            pokemonID: res.sprites.front_default,
            weight: res.weight,
            type: types,
            movesUrl: res.types[0].type.url
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
        //console.warn("entro al fetch");
      });
  }

  render() {
    return (
      /* <View style={styles.container}>
        <Text>{this.props.navigation.getParam("name")}</Text>
      </View>*/

      <View style={styles.container}>
        <Text style={styles.titleText}>{this.state.name}</Text>
        {this.state.pokemonID ? (
          <Image
            source={this.state.pokemonID ? { uri: this.state.pokemonID } : null}
            style={{ width: 200, height: 200 }}
          />
        ) : (
          <ActivityIndicator size="large" />
        )}
        <Text>{this.state.weight} pounds</Text>
        {this.state.type.map(key => {
          const colorText = TYPES_COLORS[key];
          return <Text style={{ color: `#${colorText}` }}>{key}</Text>;
        })}
        {this.state.moves.map(key => {
          return <Text>{key}</Text>;
        })}
      </View>
    );
  }
}
const TYPES_COLORS = {
  bug: "B1C12E",
  dark: "4F3A2D",
  dragon: "755EDF",
  electric: "FCBC17",
  fairy: "F4B1F4",
  fighting: "823551D",
  fire: "E73B0C",
  flying: "A3B3F7",
  ghost: "6060B2",
  grass: "74C236",
  ground: "D3B357",
  ice: "A3E7FD",
  normal: "C8C4BC",
  poison: "934594",
  psychic: "ED4882",
  rock: "B9A156",
  steel: "B5B5C3",
  water: "3295F6"
};
