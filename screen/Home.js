import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Icon } from "react-native-elements";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello Home</Text>
      </View>
    );
  }
}
