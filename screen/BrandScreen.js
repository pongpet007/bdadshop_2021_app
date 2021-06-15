import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";

export default class BrandScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          alignItems: "center",
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#EEE",
        }}
      >
        <Text>BrandScreen</Text>
      </View>
    );
  }
}
