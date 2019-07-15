import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  Image
} from "react-native";
import styles from "./styles";

import * as Constants from "../constants/Constants";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  validateUser() {
    if (
      (this.state.username == Constants.USER) &
      (this.state.password == Constants.PASSWORD)
    ) {
      const { replace } = this.props.navigation;
      replace("PokemonList");
    } else {
      Alert.alert(Constants.LOGIN_ERROR);
      this.textInput.clear();
    }
  }

  render() {
    return (
      <ScrollView style={styles.loginContainer}>
        <Image
          source={require("../../assets/pokeball_big.png")}
          style={styles.pokeballLogin}
        />

        <TextInput
          placeholder="Username"
          placeholderTextColor="#FFFFFF"
          style={styles.userInput}
          onChangeText={username => this.setState({ username })}
        />
        <TextInput
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          style={styles.userInput}
          placeholderTextColor="#FFFFFF"
          secureTextEntry={true}
          ref={input => {
            this.textInput = input;
          }}
        />
        <View style={{ margin: 7 }} />
        <Button
          onPress={this.validateUser.bind(this)}
          title="Login"
          color="#222224"
        />
      </ScrollView>
    );
  }
}
