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
import useAxios from "axios-hooks";

const Images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png",
  "http://cms.bdadshop.com//images//bannerVip//18_th.png",
  "https://cdn.logo.com/hotlink-ok/logo-social.png",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mr-bread-logo-design-template-8a8bf7264deccf537f8dd318785ebd6f_screen.jpg?ts=1579209248",
];

const Greeting = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        marginLeft: "3.5%",
        marginRight: "3.5%",
      }}
    >
      {Images.map((image, index) => (
        <View
          style={{
            width: "29%",
            marginLeft: "1%",
            marginRight: "1%",
            paddingTop: 10,
          }}
        >
          <Image
            key={index}
            source={{ uri: image }}
            style={{
              width: "100%",
              height: 125,
              borderColor: "#CCC",
              borderWidth: 1,
            }}
            resizeMode="contain"
          />
        </View>
      ))}
    </View>
  );
};

const getDataUsingSimpleGetCall = () => {
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

const ContentCatalogue = () => {
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
        <Greeting />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ContentCatalogue;
