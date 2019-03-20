import React, { Component } from "react";
import {
  Alert,
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
  TextInput
} from "react-native";

export default class Component3 extends Component {
  constructor() {
    super();
    this.state = {
      textValue: "Hello"
    };
  }

  onChangeText(value) {
    this.setState({
      textValue: value
    });
  }

  onSubmit() {
    Alert.alert(`You submitted! `);
  }

  render() {
    return (
      <View style={styles.myView}>
        <TextInput
          placeholder="Enter text here!"
          value={this.state.textValue}
          onChangeText={value => this.onChangeText(value)}
          onSubmitEditing={this.onSubmit}
        />
        <Text>{this.state.textValue}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    padding: 50,
    backgroundColor: "skyblue",
    padding: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});

AppRegistry.registerComponent("Component3", () => Component3);
