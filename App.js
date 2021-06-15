import { StatusBar } from "expo-status-bar";
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

import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import Tabs from "./navigation/tabs";

import HomeScreen from "./screen/HomeScreen";
import QuotationScreen from "./screen/QuotationScreen";
import CategoryScreen from "./screen/CategoryScreen";
import BrandScreen from "./screen/BrandScreen";
import NearmeScreen from "./screen/NearmeScreen";

// child
import ProfileScreen from "./screen/ProfileScreen";
import HomeS from "./screen/Home";

function FeedHome({ navigation }) {
  return <HomeScreen />;
}

function Quotation({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Go to User" onPress={() => navigation.navigate("User")} />
    </View>
  );
}

function Category({ navigation }) {
  return <CategoryScreen />;
}

function Brand({ navigation }) {
  return <BrandScreen />;
}

function Nearme({ navigation }) {
  return <NearmeScreen />;
}

function Profile({ navigation }) {
  return <ProfileScreen />;
}

function Userss({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to User"
        onPress={() => navigation.navigate("Profiles")}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 0,
          // paddingBottom: 10,
          height: 80,
          elevation: 0,
          backgroundColor: "#FFF",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={FeedHome}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justtifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("./assets/images/icons/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                  fontFamily: "Kanit",
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Quotation"
        component={Quotation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justtifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("./assets/images/icons/file.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                  fontFamily: "Kanit",
                }}
              >
                ใบเสนอราคา
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justtifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("./assets/images/icons/menu.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                  fontFamily: "Kanit",
                }}
              >
                หมวดหมู่
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Brand"
        component={Brand}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justtifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("./assets/images/icons/bookmark.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                  fontFamily: "Kanit",
                }}
              >
                แบรนด์
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Nearme"
        component={Nearme}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justtifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("./assets/images/icons/pin.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                  fontFamily: "Kanit",
                }}
              >
                โรงงานใกล้คุณ
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Profiles" component={Profile} />
        <Stack.Screen name="User" component={Userss} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
