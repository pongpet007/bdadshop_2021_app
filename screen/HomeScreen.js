import React, { useState } from "react";
import Carousel from "../components/Carousel";
import Carousel2 from "../components/Carousel2";
import CardItem from "../components/CardItem";
import { dummyData } from "../data/Data";
import { dummyData2 } from "../data/Data2";
import { dummyData3 } from "../data/Data3";

import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
  StatusBar,
  ImageBackground,
} from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Slider from "../components/Slider";
import Banner from "../components/Banner";

const images = [
  "http://cms.bdadshop.com/images/bannerAds/8_en.png?4551588",
  "https://images.pexels.com/photos/1183021/pexels-photo-1183021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/949193/pexels-photo-949193.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

const banner = [
  "https://www.brandexdirectory.com/images/banner/729.jpg",
  "https://www.brandexdirectory.com/images/banner/773.jpg",
  "https://www.brandexdirectory.com/advertising/assets/images/ab-11.jpg",
  "https://www.brandexdirectory.com/advertising/assets/images/social.jpg",
];

import logo from "../assets/images/logo.png";
import catalogue from "../assets/images/book.png";
import discount from "../assets/images/discount.png";
import voucher from "../assets/images/voucher.png";
import menu_category from "../assets/images/menu-category.png";
import search from "../assets/images/search.png";
import bookmark from "../assets/images/bookmark.png";

const { width } = Dimensions.get("window");
const width_s = width * 0.3;
const height_s = width * 0.3;
const height = width * 0.6;

export default class HomeScreen extends React.Component {
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
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View
          style={{
            backgroundColor: "#FFF",
            alignItems: "center",
            top: height * 0.1,
            marginBottom: 30,
          }}
        >
          <Image style={styles.logo} source={logo} />
          <View></View>
          <TouchableOpacity
            style={{ position: "absolute", top: 15, right: width * 0.05 }}
            onPress={() => this.props.navigation.navigate("Profile")}
          >
            <Image
              style={{
                width: 28,
                height: 28,
              }}
              source={require("../assets/images/100w/user-color.png")}
            />
          </TouchableOpacity>

          <View style={styles.SectionSearch}>
            <Image style={styles.searchIcon} source={search} />
            <TextInput
              style={styles.inputSearch}
              placeholder="ค้นหาสินค้าและบริการ"
              placeholderTextColor="#3333335e"
            />
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: "#FFF" }}>
          <ScrollView>
            <View style={styles.container}>
              <View>
                <ImageBackground
                  source={require("../assets/images/bgBanner.jpg")}
                  style={{
                    flex: 1,
                    resizeMode: "cover",
                    justifyContent: "center",
                  }}
                >
                  <Carousel data={dummyData} />
                </ImageBackground>
              </View>
            </View>
            <View style={styles.container2}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={styles.spaceMenu2}
                  onPress={() => this.props.navigation.navigate("Category")}
                >
                  <View style={styles.menuAlign}>
                    <Image
                      style={styles.menu_category}
                      source={require("../assets/images/100w/category.png")}
                    />
                  </View>
                </TouchableOpacity>
                <Text style={styles.menuText}>หมวดหมู่</Text>
              </View>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={styles.spaceMenu2}
                  onPress={() => this.props.navigation.navigate("Brand")}
                >
                  <View style={styles.menuAlign}>
                    <Image
                      style={styles.menu_category}
                      source={require("../assets/images/100w/brand.png")}
                    />
                  </View>
                </TouchableOpacity>
                <Text style={styles.menuText}>แบรนด์</Text>
              </View>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={styles.spaceMenu2}
                  onPress={() => this.props.navigation.navigate("Catalogue")}
                >
                  <View style={styles.menuAlign}>
                    <Image
                      style={styles.menu_category}
                      source={require("../assets/images/100w/catalogue.png")}
                    />
                  </View>
                </TouchableOpacity>
                <Text style={styles.menuText}>แคตตาล็อก</Text>
              </View>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={styles.spaceMenu2}
                  onPress={() => this.props.navigation.navigate("Discount")}
                >
                  <View style={styles.menuAlign}>
                    <Image
                      style={styles.menu_category}
                      source={require("../assets/images/100w/sale.png")}
                    />
                  </View>
                </TouchableOpacity>
                <Text style={styles.menuText}>ราคาพิเศษ</Text>
              </View>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={styles.spaceMenu2}
                  onPress={() => this.props.navigation.navigate("Profile")}
                >
                  <View style={styles.menuAlign}>
                    <Image
                      style={styles.menu_category}
                      source={require("../assets/images/100w/coupon.png")}
                    />
                  </View>
                </TouchableOpacity>
                <Text style={styles.menuText}>คูปอง</Text>
              </View>
            </View>
            <View>
              <Carousel2 data={dummyData2} />
            </View>
            <View>
              <Carousel2 data={dummyData3} />
            </View>
            <View
              style={{
                backgroundColor: "#ff8a26",
                margin: 10,
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 5,
                paddingTop: 5,
              }}
            >
              <Text
                style={{ fontSize: 15, fontFamily: "KanitBold", color: "#fff" }}
              >
                สินค้าและบริการ
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                margin: 10,
                flexWrap: "wrap",
              }}
            >
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },

  container: {
    top: 10,
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
    // justifyContent: "center",
  },
  logo: {
    width: 50,
    height: 50,
    // position: "absolute",
    // top: 0,
  },
  SectionSearch: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#3333335e",
    height: 35,
    borderRadius: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  searchIcon: {
    padding: 10,
    margin: 5,
    height: height * 0.05,
    width: width * 0.03,
    left: 10,
    resizeMode: "stretch",
    alignItems: "center",
  },
  inputSearch: {
    flex: 1,
    paddingLeft: 20,
    color: "#CCCCCC",
    height: 25,
    fontFamily: "Kanit",
  },
  spaceMenu: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  menuAlign: {
    alignItems: "center",
  },
  menu_category: {
    width: width * 0.12,
    height: width * 0.12,
  },
  menu_footer_img: {
    width: 25,
    height: 25,
    margin: "auto",
    alignItems: "center",
  },
  menuText: {
    fontFamily: "Kanit",
    fontSize: width * 0.0305,
    textAlign: "center",
  },
  footerText: {
    fontFamily: "Kanit",
    fontSize: 10,
  },
  spaceMenu2: {
    margin: 10,
  },
  menu_footer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  spaceItem: {
    flexDirection: "row",
  },
  spaceAdvice: {
    backgroundColor: "#f8931f",
    width: width * 0.9,
    marginTop: 20,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5,
  },
  textAdvice: {
    paddingLeft: 20,
    fontFamily: "Kanit",
    fontSize: 15,
    color: "#FFF",
  },
  Item1: {
    width: width_s,
    height: height_s,
    resizeMode: "cover",
    margin: 10,
    flex: 1,
  },
  Item2: {
    width: width_s,
    height: height_s,
    resizeMode: "cover",
    margin: 10,
    flex: 1,
  },
});

// export default HomeScreen;
