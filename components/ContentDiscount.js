import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import axios from "axios";

const getAPI = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then(function (response) {
      // handle success
      alert(JSON.stringify(response.data));
    })
    .catch(function (error) {
      // handle error
      alert(error.message);
    })
    .finally(function () {
      // always executed
      alert("Finally called");
    });
};

const ContentDiscount = () => {
  let [fontsLoaded] = useFonts({
    Kanit: require("../assets/fonts/Kanit-Light.ttf"),
    KanitBold: require("../assets/fonts/Kanit-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{ marginTop: 10, marginBottom: 100 }}>
      <ScrollView style={{}}>
        <TouchableOpacity onpress={getAPI}>
          <Text>Load API</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ContentDiscount;
