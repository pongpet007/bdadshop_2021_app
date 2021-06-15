import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Icon } from "react-native-elements";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import back from "../assets/images/left-arrow.png";
import profile from "../assets/images/user.png";
import file_footer from "../assets/images/footer/file.png";
import category_footer from "../assets/images/footer/category_active.png";
import brand_footer from "../assets/images/footer/bookmark.png";
import mark_footer from "../assets/images/footer/pin.png";
import user from "../assets/images/footer/user.png";
import tools_1 from "../assets/images/tools-1.jpeg";
import tools_2 from "../assets/images/tools-2.jpeg";

const { width } = Dimensions.get("window");
const width_s = width * 0.1;
const height = width * 0.1;

export default class CategoryScreen extends React.Component {
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
      <View style={{ flex: 1, backgroundColor: "#EEE", paddingBottom: 100 }}>
        <View
          style={{
            backgroundColor: "#3370b3",
            alignItems: "center",
            marginTop: 50,
            paddingBottom: 10,
            paddingTop: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
            style={{
              position: "absolute",
              left: 10,
              paddingTop: 10,
              justifyContent: "center",
            }}
          >
            <Image style={{ width: 25, height: 25, left: 10 }} source={back} />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "Kanit",
              color: "#FFF",
              fontSize: 14,
            }}
          >
            หมวดหมู่
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <ScrollView>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.width30}>
                <Image style={styles.ImgCategory} source={tools_1} />
                <View style={styles.spacefontCategory}>
                  <Text style={styles.fontCategory}>
                    ก่อสร้างและวัสดุอุปกรณ์
                  </Text>
                </View>
              </View>
              <View style={styles.width30}>
                <Image style={styles.ImgCategory} source={tools_2} />
                <View style={styles.spacefontCategory}>
                  <Text style={styles.fontCategory}>เกษตรและวัสดุอุปกรณ์</Text>
                </View>
              </View>
              <View style={styles.width30}>
                <Image style={styles.ImgCategory} source={tools_1} />
                <View style={styles.spacefontCategory}>
                  <Text style={styles.fontCategory}>ขนส่งและโลจิสติกส์</Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.width30}>
                <Image style={styles.ImgCategory} source={tools_1} />
                <View style={styles.spacefontCategory}>
                  <Text style={styles.fontCategory}>เคมีภัณฑ์และปิโตรเคมี</Text>
                </View>
              </View>
              <View style={styles.width30}>
                <Image style={styles.ImgCategory} source={tools_2} />
                <View style={styles.spacefontCategory}>
                  <Text style={styles.fontCategory}>
                    เครื่องจักรและชิ้นส่วนอะไหล่
                  </Text>
                </View>
              </View>
              <View style={styles.width30}>
                <Image style={styles.ImgCategory} source={tools_1} />
                <View style={styles.spacefontCategory}>
                  <Text style={styles.fontCategory}>เครื่องมืออุตสาหกรรม</Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.width30}>
                <Image style={styles.ImgCategory} source={tools_1} />
                <View style={styles.spacefontCategory}>
                  <Text style={styles.fontCategory}>
                    เครื่องใช้ไฟฟ้าและอุปกรณ์ไฟฟ้า
                  </Text>
                </View>
              </View>
              <View style={styles.width30}>
                <Image style={styles.ImgCategory} source={tools_2} />
                <View style={styles.spacefontCategory}>
                  <Text style={styles.fontCategory}>เซฟตี้และความฟลอดภัย</Text>
                </View>
              </View>
              <View style={styles.width30}>
                <Image style={styles.ImgCategory} source={tools_1} />
                <View style={styles.spacefontCategory}>
                  <Text style={styles.fontCategory}>
                    บรรจุภัณฑ์การจัดเก็บสินค้า
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
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
  },
  spaceMenu: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  menuAlign: {
    alignItems: "center",
  },
  menu_footer_img: {
    width: 25,
    height: 25,
    margin: "auto",
    alignItems: "center",
  },
  footerText: {
    fontFamily: "Kanit",
    fontSize: 10,
  },
  footerText_active: {
    fontFamily: "Kanit",
    fontSize: 10,
    color: "#fcae16",
  },
  menu_footer: {
    paddingLeft: "3%",
    paddingRight: "3%",
  },
  flexR50: {
    marginTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    borderBottomColor: "#EEE",
    borderBottomWidth: 1,
  },
  width30: {
    width: width * 0.3,
    backgroundColor: "#FFF",
    marginLeft: width * 0.005,
    marginRight: width * 0.005,
    marginBottom: width * 0.005,
    marginTop: width * 0.005,
    padding: 5,
    alignItems: "center",
  },
  spacefontCategory: {
    flexDirection: "row",
    padding: 15,
  },
  fontCategory: {
    flex: 1,
    flexWrap: "wrap",
    flexShrink: 1,
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Kanit",
    fontSize: 12,
  },
  ImgCategory: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 50,
  },
});

// export default ProfileScreen;
