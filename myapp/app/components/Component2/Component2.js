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
  View
} from "react-native";

export default class Component2 extends Component {
  onPress() {
    Alert.alert("you pressed 1!");
  }
  onPress2() {
    Alert.alert("you pressed 2!");
  }

  render() {
    return (
      <View>
        <View style={styles.myView}>
          <Text style={styles.myText}>Hello, you</Text>
        </View>
        <View style={styles.container}>
          <TouchableHighlight
            style={styles.v1}
            onPress={this.onPress}
            underlay="blue"
          >
            <View>
              <Text>Press me!</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity style={styles.v2} onPress={this.onPress2}>
            <View>
              <Text>Press me 2!</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.v3}>
            <Text style={styles.vText}>View 3</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myText: {
    color: "blue"
  },

  myView: {
    backgroundColor: "skyblue",
    padding: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  v1: {
    flex: 1,
    backgroundColor: "dodgerblue",
    padding: 10
  },
  v2: {
    flex: 1,
    backgroundColor: "goldenrod",
    padding: 10
  },
  v3: {
    flex: 1,
    backgroundColor: "violet",
    padding: 10
  },
  vText: {
    color: "white"
  }
});

AppRegistry.registerComponent("Component2", () => Component2);
