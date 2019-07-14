import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity
} from "react-native";
import { SearchBar } from "react-native-elements";
import styles from "./styles";

//POR EJEMPLO ESTO METERLO EN EL ARCHIVO DE CONSTANTES
//const api = "https://swapi.co/api/people/";

//AL HACER LAS PETICIONES A LA API PONER LA PETICION DENTRO DE UN TRY CATCH PARA TRAER EL
//ERROR Y CONTROLAR

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      search: "",
      quantity: 0
    };
    //Como renderCharacter no es arrowfunction, se bindea para que tome el contexto
    this.renderCharacter = this.renderCharacter.bind(this);
    this.getPokemons = this.getPokemons.bind(this);
    this.getMorePokemons = this.getMorePokemons.bind(this);
  }

  updateSearch = search => {
    this.setState({ search });
  };

  getPokemons() {
    const api = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${
      this.state.quantity
    }`;
    fetch(api)
      .then(res => res.json())
      .then(res =>
        this.setState({
          list: this.state.list.concat(res.results),
          quantity: this.state.quantity + 20
        })
      );
  }

  getMorePokemons() {
    console.warn("more pokeballs pika");
    this.getPokemons();
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
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.cutCharacter(
              item.url
            )}.png`
          }}
          style={{ width: 150, height: 150 }}
        />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }
  render() {
    const { list, search } = this.state;

    return (
      <View>
        <SearchBar
          placeholder="Find a pokemon..."
          onChangeText={this.updateSearch}
          value={search}
        />
        {list ? (
          <FlatList
            horizontal={false}
            numColumns={2}
            data={list}
            keyExtractor={(item, index) => index.toString()}
            //keyExtractor={item => item.name}
            renderItem={({ item }) => this.renderCharacter(item)}
            onEndReached={this.getPokemons}
          />
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
    );
  }
}

export default List;
