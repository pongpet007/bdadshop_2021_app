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
  ActivityIndicator,
} from "react-native";

import { Icon } from "react-native-elements";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import back from "../assets/images/left-arrow.png";
import profile from "../assets/images/user.png";

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
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFF",
          paddingBottom: 100,
        }}
      >
        <View
          style={{
            backgroundColor: "#3370b3",
            alignItems: "center",
            marginTop: 50,
            paddingBottom: 10,
            paddingTop: 10,
            ...styles.fontDS,
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
              // fontFamily: "Kanit",
              color: "#FFF",
              fontSize: 15,
              ...styles.fontDS,
            }}
          >
            บัญชีของฉัน
          </Text>
        </View>
        <View style={{ backgroundColor: "#FFF" }}>
          <ScrollView>
            <View style={{ alignItems: "center", marginTop: 10 }}>
              <Image
                source={profile}
                style={{
                  width: width_s,
                  height: height,
                  borderRadius: 50,
                }}
                PlaceholderContent={<ActivityIndicator />}
              />
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
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 10,
                paddingTop: 10,
              }}
            >
              <View style={{ flex: 1, width: "50%" }}>
                <Text
                  style={{
                    textAlign: "left",
                    fontFamily: "Kanit",
                    fontSize: 15,
                    color: "#3975b1",
                  }}
                >
                  ข้อมูลส่วนบุคคล
                </Text>
              </View>
              <View style={{ flex: 1, width: "50%" }}>
                <TouchableOpacity
                  style={{
                    right: 0,
                    position: "absolute",
                    textAlign: "right",
                    flexDirection: "row",
                    top: 0,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    reverse
                    name="pencil-outline"
                    type="ionicon"
                    color="#000"
                    size={5}
                  />
                  <Text
                    style={{ ...styles.fontDS, fontSize: 16, color: "#000" }}
                  >
                    แก้ไขข้อมูล
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 10,
                paddingTop: 10,
                borderBottomColor: "#CCC",
                borderBottomWidth: 1,
              }}
            >
              <View style={{ flex: 1, width: "50%" }}>
                <Text
                  style={{
                    textAlign: "left",
                    fontFamily: "Kanit",
                    fontSize: 15,
                    color: "#3975b1",
                  }}
                >
                  ชือ - นามสกุล
                </Text>
              </View>
              <View style={{ flex: 1, width: "50%" }}>
                <Text
                  style={{
                    textAlign: "right",
                    right: 0,
                    top: 5,
                    position: "absolute",
                    ...styles.fontDS,
                    color: "#808080",
                  }}
                >
                  มานี มีใจรักการเรียน
                </Text>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 10,
                paddingTop: 10,
                borderBottomColor: "#CCC",
                borderBottomWidth: 1,
              }}
            >
              <View style={{ flex: 1, width: "50%" }}>
                <Text
                  style={{
                    textAlign: "left",
                    fontFamily: "Kanit",
                    fontSize: 15,
                    color: "#3975b1",
                  }}
                >
                  เปลี่ยนรหัสผ่าน
                </Text>
              </View>
              <View style={{ flex: 1, width: "50%" }}>
                <Text
                  style={{
                    textAlign: "right",
                    right: 0,
                    top: 5,
                    position: "absolute",
                    ...styles.fontDS,
                    color: "#808080",
                  }}
                >
                  <Icon
                    reverse
                    name="chevron-forward-outline"
                    type="ionicon"
                    color="#7e7e7e"
                    size={8}
                  />
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 10,
                paddingTop: 10,
                borderBottomColor: "#CCC",
                borderBottomWidth: 1,
              }}
            >
              <View style={{ flex: 1, width: "50%" }}>
                <Text
                  style={{
                    textAlign: "left",
                    fontFamily: "Kanit",
                    fontSize: 15,
                    color: "#3975b1",
                  }}
                >
                  เบอร์โทรศัพท์
                </Text>
              </View>
              <View style={{ flex: 1, width: "50%" }}>
                <Text
                  style={{
                    textAlign: "right",
                    right: 0,
                    top: 5,
                    position: "absolute",
                    ...styles.fontDS,
                    color: "#808080",
                  }}
                >
                  0650557896
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 10,
                paddingTop: 10,
                borderBottomColor: "#CCC",
                borderBottomWidth: 1,
              }}
            >
              <View style={{ flex: 1, width: "50%" }}>
                <Text
                  style={{
                    textAlign: "left",
                    fontFamily: "Kanit",
                    fontSize: 15,
                    color: "#3975b1",
                  }}
                >
                  อีเมล
                </Text>
              </View>
              <View style={{ flex: 1, width: "50%" }}>
                <Text
                  style={{
                    textAlign: "right",
                    right: 0,
                    top: 5,
                    position: "absolute",
                    ...styles.fontDS,
                    color: "#808080",
                  }}
                >
                  example@gmail.com
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 10,
                paddingTop: 10,
                borderBottomColor: "#CCC",
                borderBottomWidth: 1,
              }}
            >
              <View style={{ flex: 1, width: "50%" }}>
                <Text
                  style={{
                    textAlign: "left",
                    fontFamily: "Kanit",
                    fontSize: 15,
                    color: "#3975b1",
                  }}
                >
                  ไอดีไลน์
                </Text>
              </View>
              <View style={{ flex: 1, width: "50%" }}>
                <Text
                  style={{
                    textAlign: "right",
                    right: 0,
                    top: 5,
                    position: "absolute",
                    ...styles.fontDS,
                    color: "#808080",
                  }}
                >
                  exam_555
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 10,
                paddingTop: 10,
                borderBottomColor: "#CCC",
                borderBottomWidth: 1,
              }}
            >
              <View style={{ flex: 1, width: "50%" }}>
                <Text
                  style={{
                    textAlign: "left",
                    fontFamily: "Kanit",
                    fontSize: 15,
                    color: "#3975b1",
                  }}
                >
                  เฟสบุ๊ค
                </Text>
              </View>
              <View style={{ flex: 1, width: "50%" }}>
                <Text
                  style={{
                    textAlign: "right",
                    right: 0,
                    top: 5,
                    position: "absolute",
                    ...styles.fontDS,
                    color: "#808080",
                  }}
                >
                  Xample Sky
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 10,
                paddingTop: 10,
                borderBottomColor: "#CCC",
                borderBottomWidth: 1,
              }}
            >
              <View style={{ flex: 1, width: "50%" }}>
                <Text
                  style={{
                    textAlign: "left",
                    fontFamily: "Kanit",
                    fontSize: 15,
                    color: "#3975b1",
                  }}
                >
                  ตั้งค่าการแจ้งเตือน
                </Text>
              </View>
              <View style={{ flex: 1, width: "50%" }}>
                <Text
                  style={{
                    textAlign: "right",
                    right: 0,
                    top: 5,
                    position: "absolute",
                    ...styles.fontDS,
                    color: "#808080",
                  }}
                >
                  **
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 10,
                paddingTop: 10,
                borderBottomColor: "#CCC",
                borderBottomWidth: 1,
              }}
            >
              <View style={{ flex: 1, width: "50%" }}>
                <TouchableOpacity>
                  <Text
                    style={{
                      textAlign: "left",
                      fontFamily: "Kanit",
                      fontSize: 15,
                      color: "#3975b1",
                    }}
                  >
                    เปลี่ยนภาษา
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, width: "50%" }}>
                <Text
                  style={{
                    textAlign: "right",
                    right: 0,
                    top: 5,
                    position: "absolute",
                    ...styles.fontDS,
                    color: "#808080",
                  }}
                >
                  <Icon
                    reverse
                    name="chevron-forward-outline"
                    type="ionicon"
                    color="#7e7e7e"
                    size={8}
                  />
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 10,
                paddingTop: 10,
                borderBottomColor: "#CCC",
                borderBottomWidth: 1,
              }}
            >
              <View style={{ flex: 1, width: "50%" }}>
                <TouchableOpacity>
                  <Text
                    style={{
                      textAlign: "left",
                      fontFamily: "Kanit",
                      fontSize: 15,
                      color: "#3975b1",
                    }}
                  >
                    ออกจากระบบ
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, width: "50%" }}>
                <TouchableOpacity>
                  <Text
                    style={{
                      textAlign: "right",
                      right: 0,
                      top: 5,
                      position: "absolute",
                      ...styles.fontDS,
                      color: "#808080",
                    }}
                  >
                    <Icon
                      reverse
                      name="chevron-forward-outline"
                      type="ionicon"
                      color="#7e7e7e"
                      size={8}
                    />
                  </Text>
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
  fontDS: {
    fontFamily: "Kanit",
  },
});

// export default ProfileScreen;
