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
const width_s = width * 0.1;
const height = width * 0.1;

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
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            backgroundColor: "#3370b3",
            alignItems: "center",
            flex: 0.03,
            top: height * 0.03,
            padding: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
            style={{ position: "absolute", left: 0 }}
          >
            <Image
              style={{ width: 25, height: 25, top: height * 0.1, left: 10 }}
              source={back}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "Kanit",
              color: "#FFF",
              fontSize: width * 0.04,
            }}
          >
            บัญชีของฉัน
          </Text>
        </View>
        <View style={{ flex: 0.85 }}>
          <ScrollView>
            <View style={{ alignItems: "center" }}>
              <Image
                source={profile}
                style={{
                  width: width_s,
                  height: height,
                  borderRadius: "50%",
                  marginTop: 10,
                }}
              ></Image>
              <Text
                style={{
                  fontFamily: "Kanit",
                  fontSize: width * 0.04,
                  paddingTop: 5,
                  paddingBottom: 5,
                  fontWeight: 600,
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
                  <Text style={{ fontFamily: "Kanit", fontWeight: 500 }}>
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

            {/* <Text>ชื่อ อาจารย์มี มหาการ</Text>
          <Button
            title="Home"
            onPress={() => this.props.navigation.navigate("Home")}
          /> */}
          </ScrollView>
        </View>

        <View
          style={{
            flex: 0.14,
            backgroundColor: "#FFF",
            width: "100%",
            alignItems: "center",
          }}
        >
          <View style={styles.spaceMenu}>
            <TouchableOpacity
              style={styles.menu_footer}
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <View style={styles.menuAlign}>
                <Image style={styles.menu_footer_img} source={user_active} />
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom: 30,
    // justifyContent: "center",
    top: 50,
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
    width: wp("8%"),
    height: wp("8%"),
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
    paddingLeft: wp("3.8%"),
    paddingRight: wp("3.8%"),
  },
  footerText: {
    fontFamily: "Kanit",
    fontSize: wp("2.5%"),
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
    // position: "absolute",
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
