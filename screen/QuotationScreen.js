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

export default class QuotationScreen extends React.Component {
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
        <Text>QuotationScreen</Text>
        <TouchableOpacity
          style={{ position: "absolute", top: 10, right: 20 }}
          onPress={() => navigation.navigate(Profile)}
        >
          <Image
            style={{
              width: 25,
              height: 25,
            }}
            source={require("../assets/images/user.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
