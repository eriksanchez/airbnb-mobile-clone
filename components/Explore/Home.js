import React, { Component } from "react";

import { View, Text, StyleSheet, Image } from "react-native";

class Home extends Component {
  render() {
    return (
      <View
        style={{
          width: this.props.width / 2,
          height: this.props.width / 2,
          borderWidth: 0.5,
          borderColor: "#dddddd",
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "cover",
            }}
            source={require("../../assets/home.jpg")}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            paddingLeft: 10,
          }}
        >
          <Text style={{ fontSize: 14, color: "#b63838" }}>
            PRIVATE ROOM - 2 BEDS
          </Text>
          <Text>The Cozy Palace</Text>
          <Text>82$</Text>
        </View>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
