import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView
} from "react-native";

class GBTextInput extends Component {
  constructor(props) {
    super(props);
    const { text } = props;
    this.state = {
      text
    };

    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = text => {
    this.setState({ text });
  };

  handleSubmit = event => {
    Alert.alert(`You subbmited:  ${this.state.text}`);
    event.preventDefault();
  };

  render() {
    const { text } = this.state;
    const { containerStyle, spaceBetween, inputStyle, buttonStyle } = styles;

    return (
      <SafeAreaView style={{ flex: 0 }}>
        <View>
          <View style={containerStyle}>
            <View style={spaceBetween} />
            <TextInput
              placeholder="enter text here"
              style={inputStyle}
              onChangeText={this.handleChange}
              value={text}
              onSubmitEditing={text => this.handleSubmit}
            />
          </View>
          <View style={{ width: 50, height: 50 }} />
          <TouchableOpacity style={buttonStyle} onPress={this.handleSubmit}>
            <Text>PRESS ME</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonStyle: {
    alignSelf: "stretch",
    margin: 6,
    padding: 6,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "blue",
    borderWidth: StyleSheet.hairlineWidth
  },
  spaceBetween: {
    height: 40,
    width: "20%",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 6
  },
  inputStyle: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    position: "relative",
    paddingLeft: 6
  }
});

export default GBTextInput;
