import React, { Component } from "react";
import { ScrollView, Text, TextInput, View, Button } from "react-native";
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
      console.warn(this.state);
      const { replace } = this.props.navigation;
      replace("PokemonList");
    } else {
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={{ fontSize: 27 }}>Login</Text>
        <TextInput
          placeholder="Username"
          onChangeText={username => this.setState({ username })}
        />
        <TextInput
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          secureTextEntry={true}
        />
        <View style={{ margin: 7 }} />
        <Button onPress={this.validateUser.bind(this)} title="Submit" />
      </ScrollView>
    );
  }
}
