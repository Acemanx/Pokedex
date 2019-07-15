import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity
} from "react-native";
import * as Constants from "../constants/Constants";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      quantity: 0
    };
    this.renderCharacter = this.renderCharacter.bind(this);
    this.getPokemons = this.getPokemons.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Pokedex",
      headerTitleStyle: {
        textAlign: "center",
        flex: 1
      },
      headerStyle: {
        backgroundColor: "#FFCB05"
      },
      headerLeft: (
        <Image
          source={require("../../assets/pokeball.png")}
          style={styles.pokeballLogo}
        />
      ),
      headerRight: (
        <TouchableOpacity
          onPress={() => {
            navigation.replace("Home");
          }}
        >
          <Image
            source={require("../../assets/exit.png")}
            style={styles.logoutLogo}
          />
        </TouchableOpacity>
      )
    };
  };

  updateSearch = search => {
    this.setState({ search });
  };

  getPokemons() {
    const api = `${Constants.RETRIEVE_POKEMONS_URI}${this.state.quantity}`;
    fetch(api)
      .then(res => res.json())
      .then(res =>
        this.setState({
          list: this.state.list.concat(res.results),
          quantity: this.state.quantity + 20
        })
      );
  }

  componentDidMount() {
    this.getPokemons();
  }

  cutCharacter(url) {
    url = url.replace(/\//g, "").slice(28);
    return url;
  }

  renderCharacter(item) {
    const { navigate } = this.props.navigation;

    return (
      <TouchableOpacity
        value={item.name}
        style={styles.pokemonCard}
        onPress={() =>
          navigate("PokemonInfo", { screen: "PokemonInfo", name: item.name })
        }
      >
        <Image
          source={{
            uri: `${Constants.POKEMON_IMAGE_URI}${this.cutCharacter(item.url)}${
              Constants.PNG
            }`
          }}
          style={styles.pokemonListImage}
        />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }
  render() {
    const { list } = this.state;

    return (
      <LinearGradient colors={["rgba(61, 125, 202, 1)", "transparent"]}>
        <View>
          {list ? (
            <FlatList
              horizontal={false}
              numColumns={2}
              data={list}
              keyExtractor={index => index.toString()}
              renderItem={({ item }) => this.renderCharacter(item)}
              onEndReached={this.getPokemons}
            />
          ) : (
            <ActivityIndicator size="large" />
          )}
        </View>
      </LinearGradient>
    );
  }
}
