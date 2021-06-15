import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import HomeScreen from "../screen/HomeScreen";
import QuotationScreen from "../screen/QuotationScreen";
import CategoryScreen from "../screen/CategoryScreen";
import BrandScreen from "../screen/BrandScreen";
import NearmeScreen from "../screen/NearmeScreen";

const Tab = createBottomTabNavigator();

export default class tabs extends React.Component {
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
      Kanit: require("../assets/fonts/Kanit-Light.ttf"),
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
          component={HomeScreen}
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
                  source={require("../assets/images/icons/home.png")}
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
          component={QuotationScreen}
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
                  source={require("../assets/images/icons/file.png")}
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
          component={CategoryScreen}
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
                  source={require("../assets/images/icons/menu.png")}
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
          component={BrandScreen}
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
                  source={require("../assets/images/icons/bookmark.png")}
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
        {/* <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ tabBarLabel: "Profile!" }}
        /> */}
        <Tab.Screen
          name="Nearme"
          component={NearmeScreen}
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
                  source={require("../assets/images/icons/pin.png")}
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
}

const style = StyleSheet.create({});

// export default Tabs;
