import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";

import { Icon } from "react-native-elements";

import AppLoading from "expo-app-loading";
import { useFonts } from "@expo-google-fonts/inter";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

import * as Font from "expo-font";

import Slider from "../components/Slider";

import Banner from "../components/Banner";

const images = [
  "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
import profile from "../assets/images/profile.png";
import user from "../assets/images/user.png";
import menu from "../assets/images/menu.png";
import catalogue from "../assets/images/book.png";
import discount from "../assets/images/discount.png";
import voucher from "../assets/images/voucher.png";
import menu_category from "../assets/images/menu-category.png";
import list from "../assets/images/list.png";
import search from "../assets/images/search.png";
import bookmark from "../assets/images/bookmark.png";
import file_footer from "../assets/images/footer/file.png";
import category_footer from "../assets/images/footer/menu-category.png";
import brand_footer from "../assets/images/footer/bookmark.png";
import mark_footer from "../assets/images/footer/pin.png";
import user_footer from "../assets/images/footer/user.png";

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
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.1,
            backgroundColor: "#FFF",
            alignItems: "center",
            top: height * 0.2,
            marginBottom: height * 0.18,
          }}
        >
          <Image style={styles.logo} source={logo} />
          <TouchableOpacity
            style={{ position: "absolute", top: 15, right: width * 0.05 }}
            onPress={() => this.props.navigation.navigate("Profile")}
          >
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={user}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.8, backgroundColor: "#FFF" }}>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.SectionSearch}>
                <Image style={styles.searchIcon} source={search} />
                <TextInput
                  style={styles.inputSearch}
                  placeholder="Search"
                  placeholderTextColor="#3333335e"
                />
              </View>

              <View style={styles.spaceSlideHead}>
                <Slider images={images} />
              </View>

              <View style={styles.spaceMenu}>
                <TouchableOpacity
                  style={styles.spaceMenu2}
                  onPress={() => this.props.navigation.navigate("Profile")}
                >
                  <View style={styles.menuAlign}>
                    <Image
                      style={styles.menu_category}
                      source={menu_category}
                    />
                    <Text style={styles.menuText}>หมวดหมู่</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.spaceMenu2}
                  onPress={() => this.props.navigation.navigate("Profile")}
                >
                  <View style={styles.menuAlign}>
                    <Image style={styles.menu_category} source={bookmark} />
                    <Text style={styles.menuText}>แบรนด์</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.spaceMenu2}
                  onPress={() => this.props.navigation.navigate("Profile")}
                >
                  <View style={styles.menuAlign}>
                    <Image style={styles.menu_category} source={catalogue} />
                    <Text style={styles.menuText}>category</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.spaceMenu2}
                  onPress={() => this.props.navigation.navigate("Profile")}
                >
                  <View style={styles.menuAlign}>
                    <Image style={styles.menu_category} source={discount} />
                    <Text style={styles.menuText}>ราคาพิเศษ</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.spaceMenu2}
                  onPress={() => this.props.navigation.navigate("Profile")}
                >
                  <View style={styles.menuAlign}>
                    <Image style={styles.menu_category} source={voucher} />
                    <Text style={styles.menuText}>คูปอง</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.spaceSlideBanner}>
                <Banner images={banner} />
              </View>

              <View style={styles.spaceAdvice}>
                <Text style={styles.textAdvice}>สินค้าแนะนำ</Text>
              </View>

              <View style={styles.spaceItem}>
                <TouchableOpacity
                  style={styles.spaceItem}
                  onPress={() => this.props.navigation.navigate("Profile")}
                >
                  <View style={styles.menuAlign}>
                    <Image
                      style={styles.Item1}
                      source={{
                        uri: "https://images.pexels.com/photos/3926782/pexels-photo-3926782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                      }}
                    />
                    <Text style={styles.menuText}>คูปอง</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.spaceItem}
                  onPress={() => this.props.navigation.navigate("Profile")}
                >
                  <View style={styles.menuAlign}>
                    <Image style={styles.Item2} source={voucher} />
                    <Text style={styles.menuText}>คูปอง</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            flex: 0.1,
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <View style={styles.spaceMenu}>
            <TouchableOpacity
              style={styles.menu_footer}
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <View style={styles.menuAlign}>
                <Image style={styles.menu_footer_img} source={user_footer} />
                <Text style={styles.footerText}>บัญชี</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menu_footer}
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <View style={styles.menuAlign}>
                <Image style={styles.menu_footer_img} source={file_footer} />
                <Text style={styles.footerText}>ใบเสนอราคา</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menu_footer}
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <View style={styles.menuAlign}>
                <Image
                  style={styles.menu_footer_img}
                  source={category_footer}
                />
                <Text style={styles.footerText}>หมวดหมู่</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menu_footer}
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <View style={styles.menuAlign}>
                <Image style={styles.menu_footer_img} source={brand_footer} />
                <Text style={styles.footerText}>แบรนด์</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menu_footer}
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <View style={styles.menuAlign}>
                <Image style={styles.menu_footer_img} source={mark_footer} />
                <Text style={styles.footerText}>โรงงานใกล้คุณ</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom: 30,
    // justifyContent: "center",
  },
  logo: {
    width: 60,
    height: 60,
    // position: "absolute",
    // top: 0,
  },
  SectionSearch: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#3333335e",
    height: height * 0.13,
    margin: 10,
    width: width * 0.95,
  },
  searchIcon: {
    padding: 8,
    margin: 5,
    height: height * 0.05,
    width: width * 0.03,
    left: 15,
    resizeMode: "stretch",
    alignItems: "center",
  },
  inputSearch: {
    flex: 1,
    left: 20,
    paddingLeft: 20,
    color: "#3333335e",
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
    width: wp("9%"),
    height: wp("9%"),
    margin: "auto",
  },
  menu_footer_img: {
    width: wp("8%"),
    height: wp("8%"),
    margin: "auto",
    alignItems: "center",
  },
  menuText: {
    fontFamily: "Kanit",
    fontSize: wp("3%"),
  },
  footerText: {
    fontFamily: "Kanit",
    fontSize: wp("2.5%"),
  },
  spaceMenu2: {
    margin: 10,
  },
  menu_footer: {
    paddingLeft: wp("3.8%"),
    paddingRight: wp("3.8%"),
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
    fontSize: width * 0.04,
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
