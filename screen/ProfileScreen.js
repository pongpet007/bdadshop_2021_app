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
import category_footer from "../assets/images/footer/menu-category.png";
import brand_footer from "../assets/images/footer/bookmark.png";
import mark_footer from "../assets/images/footer/pin.png";
import user_active from "../assets/images/footer/user_active.png";

const { width } = Dimensions.get("window");
const width_s = width * 0.13;
const height = width * 0.13;

export default class ProfileScreen extends React.Component {
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
              fontSize: 15,
            }}
          >
            บัญชีของฉัน
          </Text>
        </View>
        <View style={{}}>
          <ScrollView>
            <View style={{ alignItems: "center", marginTop: 10 }}>
              <Image
                source={profile}
                style={{
                  width: width_s,
                  height: height,
                  borderRadius: 50,
                }}
              ></Image>
              <Text
                style={{
                  fontFamily: "Kanit",
                  fontSize: 15,
                  paddingTop: 5,
                  paddingBottom: 5,
                }}
              >
                ชื่อ นายมานี มีใจ
              </Text>
            </View>
            <View style={styles.flexR50}>
              <View style={styles.width50}>
                <Text
                  style={{
                    fontFamily: "KanitBold",
                    // position: "absolute",
                    left: 20,
                    color: "#396faf",
                  }}
                >
                  ข้อมูลส่วนบุคคล
                </Text>
              </View>
              <View style={styles.width50}>
                <TouchableOpacity style={{ position: "absolute", right: 20 }}>
                  <Text style={{ fontFamily: "Kanit" }}>
                    <Icon
                      name="pencil-outline"
                      type="ionicon"
                      color="#333"
                      size="13"
                    />
                    แก้ไขข้อมูล
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.flexR50}>
              <View style={styles.width50}>
                <Text style={styles.Left20}>ชื่อ - นามสกุล</Text>
              </View>
              <View style={styles.width50}>
                <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    fontFamily: "Kanit",
                    color: "#CCCCCC",
                  }}
                >
                  มานี มีใจ
                </Text>
              </View>
            </View>
            <View style={styles.flexR50}>
              <View style={styles.width50}>
                <Text style={styles.Left20}>เปลี่ยนรหัสผ่าน</Text>
              </View>
              <View style={styles.width50}>
                <TouchableOpacity style={styles.Right20}>
                  <Icon
                    name="chevron-forward-outline"
                    type="ionicon"
                    color="#333"
                    size="13"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.flexR50}>
              <View style={styles.width50}>
                <Text style={styles.Left20}>เบอร์โทรศัพท์</Text>
              </View>
              <View style={styles.width50}>
                <Text
                  style={{ position: "absolute", right: 20, color: "#CCCCCC" }}
                >
                  0615559999
                </Text>
              </View>
            </View>
            <View style={styles.flexR50}>
              <View style={styles.width50}>
                <Text style={styles.Left20}>อีเมล</Text>
              </View>
              <View style={styles.width50}>
                <Text
                  style={{ position: "absolute", right: 20, color: "#CCCCCC" }}
                >
                  example@gmail.com
                </Text>
              </View>
            </View>
            <View style={styles.flexR50}>
              <View style={styles.width50}>
                <Text style={styles.Left20}>ไอดีไลน์</Text>
              </View>
              <View style={styles.width50}>
                <Text
                  style={{ position: "absolute", right: 20, color: "#CCCCCC" }}
                >
                  examlineid01
                </Text>
              </View>
            </View>
            <View style={styles.flexR50}>
              <View style={styles.width50}>
                <Text style={styles.Left20}>เฟสบุ๊ค</Text>
              </View>
              <View style={styles.width50}>
                <Text
                  style={{ position: "absolute", right: 20, color: "#CCCCCC" }}
                >
                  Logan Lee
                </Text>
              </View>
            </View>
            <View style={styles.flexR50}>
              <View style={styles.width50}>
                <Text style={styles.Left20}>ตั้งค่าการแจ้งเตือน</Text>
              </View>
              <View style={styles.width50}>
                <Text
                  style={{ position: "absolute", right: 20, color: "#CCCCCC" }}
                >
                  wait API
                </Text>
              </View>
            </View>
            <View style={styles.flexR50}>
              <View style={styles.width50}>
                <Text style={styles.Left20}>เปลี่ยนภาษา</Text>
              </View>
              <View style={styles.width50}>
                <TouchableOpacity style={styles.Right20}>
                  <Icon
                    name="chevron-forward-outline"
                    type="ionicon"
                    color="#333"
                    size="13"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.flexR50}>
              <View style={styles.width50}>
                <Text style={styles.Left20}>เปลี่ยนภาษา</Text>
              </View>
              <View style={styles.width50}>
                <TouchableOpacity style={styles.Right20}>
                  <Icon
                    name="chevron-forward-outline"
                    type="ionicon"
                    color="#333"
                    size="13"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.flexR50}>
              <View style={styles.width50}>
                <Text style={styles.Left20}>ออกจากระบบ</Text>
              </View>
              <View style={styles.width50}>
                <TouchableOpacity style={styles.Right20}>
                  <Icon
                    name="chevron-forward-outline"
                    type="ionicon"
                    color="#333"
                    size="13"
                  />
                </TouchableOpacity>
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
  width50: {
    width: "50%",
  },
  Left20: {
    left: 20,
    fontFamily: "Kanit",
    color: "#396faf",
  },
  Right20: {
    right: 20,
    position: "absolute",
    fontFamily: "Kanit",
  },
});

// export default ProfileScreen;
