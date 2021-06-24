import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import App from "../../App";
import { name as appName } from "./app.json";
// Redux begin
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./src/reducers";
import { AppRegistry } from "react-native";
// Redux End

import HomeScreen from "./screen/HomeScreen";
import ProfileScreen from "./screen/ProfileScreen";
import CategoryScreen from "./screen/CategoryScreen";
import SubCategoryScreen from "./screen/SubCategoryScreen";
import BrandScreen from "./screen/BrandScreen";
import CatalogueScreen from "./screen/CatalogueScreen";
import TestScreen from "./screen/TestScreen";
import DiscountScreen from "./screen/DiscountScreen";

const Stack = createStackNavigator();

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Category" component={CategoryScreen} />
          <Stack.Screen name="SubCategory" component={SubCategoryScreen} />
          <Stack.Screen name="Brand" component={BrandScreen} />
          <Stack.Screen name="Catalogue" component={CatalogueScreen} />
          <Stack.Screen name="TestAA" component={TestScreen} />
          <Stack.Screen name="Discount" component={DiscountScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});

AppRegistry.registerComponent(appName, () => App);
// export default App;
