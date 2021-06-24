import * as React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import axios from "axios";
import calReducer from "../src/reducers/cal.reducer";
import loadReducer from "../src/reducers/load.reducer";

import * as calAction from "../src/actions/cal.action";

const ContentDiscount = (props) => {
  const getAPI = () => {
    axios
      .get("http://bdadshop.com/api/Home/indexnew")
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

  const calReducer = useSelector(({ calReducer }) => calReducer);
  const loadReducer = useSelector(({ loadReducer }) => loadReducer);
  const dispatch = useDispatch();

  let [fontsLoaded] = useFonts({
    Kanit: require("../assets/fonts/Kanit-Light.ttf"),
    KanitBold: require("../assets/fonts/Kanit-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{ marginTop: 10, marginBottom: 100, alignItems: "center" }}>
      {/* <ScrollView style={{}}>
        <TouchableOpacity onPress={getAPI}>
          <Text>Load API Content</Text>
        </TouchableOpacity>
        <Text onPress={getAPI}>Get APi</Text>
        <Text style={{ fontSize: 18 }}>Count {calReducer.count}</Text>
        <View style={{ padding: 20, top: 20 }}>
          <Button title="ADD" />
        </View>
      </ScrollView> */}
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Count = {calReducer.count}:
      </Text>
      <View style={{ flexDirection: "row" }}>
        {/* <Button title="ADD" onPress={() => dispatch(calAction.add())} />
        <Button title="Remove" onPress={() => dispatch(calAction.remove())} />
        <Button title="Clear" onPress={() => dispatch(calAction.clear(0))} /> */}
        <Button
          title="fetchToDos"
          onPress={() => dispatch(calAction.fetchToDos())}
        />
      </View>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <Text>Load Data form API == </Text>
        <Text>{loadReducer.isFetching}</Text>
      </View>
      {/* <Text
        style={{
          marginTop: 10,
          width: "100%",
          height: 50,
          backgroundColor: "yellow",
          textAlign: "center",
        }}
      >
        Item 1 :Count {calReducer.count}
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ContentDiscount;
