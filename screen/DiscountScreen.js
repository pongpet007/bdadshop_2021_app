import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import ContentDiscount from "../components/ContentDiscount";
import TestProps from "../components/TestProps";

export default class DiscountScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingFont: true,
    };

    this._loadingFont = this._loadingFont.bind(this);
  }

  componentDidMount() {
    this._loadingFont();
  }

  async _loadingFont() {
    await Font.loadAsync({
      Kanit: require("../assets/fonts/Kanit-Regular.ttf"),
      KanitBold: require("../assets/fonts/Kanit-Medium.ttf"),
    });

    this.setState({ loadingFont: false });
  }

  render() {
    const { loadingFont } = this.state;

    if (loadingFont) {
      return <AppLoading />;
    }

    return (
      <View style={styles.centeredView}>
        <View
          style={{
            backgroundColor: "#3370b3",
            alignItems: "center",
            paddingBottom: 10,
            paddingTop: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
            style={{
              position: "absolute",
              left: 10,
              paddingTop: 8,
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: 25, height: 25, left: 10 }}
              source={require("../assets/images/left-arrow.png")}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "Kanit",
              color: "#FFF",
              fontSize: 14,
            }}
          >
            Discount
          </Text>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
            style={{
              position: "absolute",
              right: 20,
              paddingTop: 8,
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: 25,
                height: 25,
                left: 10,
                tintColor: "#FFF",
              }}
              source={require("../assets/images/icons/home.png")}
            />
          </TouchableOpacity>
        </View>
        <ContentDiscount />
        {/* <TestProps /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    marginTop: 50,
    marginBottom: 50,
  },

  fontDS: {
    fontFamily: "Kanit",
  },
});
