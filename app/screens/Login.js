import React, { Component } from "react";
import { ScrollView, Text, TextInput, View, Button, Alert } from "react-native";
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
      console.warn("entro al login");
      const { replace } = this.props.navigation;
      replace("PokemonList");
    } else {
      Alert.alert("Wrong username or password");
      this.textInput.clear();
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
          ref={input => {
            this.textInput = input;
          }}
        />
        <View style={{ margin: 7 }} />
        <Button onPress={this.validateUser.bind(this)} title="Submit" />
      </ScrollView>
    );
  }
}
