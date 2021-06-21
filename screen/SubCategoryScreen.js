import React, { useState } from "react";
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

const { width } = Dimensions.get("window");
const width_s = width * 0.1;
const height = width * 0.1;

import axios from "axios";

const getDataUsingSimpleGetCall = () => {
  axios
    .get("http://bdadshop.com/api/Home/indexnew")
    .then(function (response) {
      // handle success
      // alert(JSON.stringify(response.data));
      alert(JSON.stringify(response.data));
      // setDatabanner(response.data.bannervip);
      // alert(JSON.stringify(databaner));
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

const getDataUsingAsyncAwaitGetCall = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    alert(JSON.stringify(response.data));
  } catch (error) {
    // handle error
    alert(error.message);
  }
};

const postDataUsingSimplePostCall = () => {
  axios
    .post("http://bdadshop.com/api/Home/indexnew", {
      // title: "foo",
      // body: "bar",
      // userId: 1,
      // vip_id: 18,
      // bannervip,
    })
    .then(function (response) {
      // handle success
      alert(JSON.stringify(response.data));
    })
    .catch(function (error) {
      // handle error
      alert(error.message);
    });
};

const multipleRequestsInSingleCall = () => {
  axios
    .all([
      axios
        .get("https://jsonplaceholder.typicode.com/posts/1")
        .then(function (response) {
          // handle success
          alert("Post 1 : " + JSON.stringify(response.data));
        }),
      axios
        .get("https://jsonplaceholder.typicode.com/posts/2")
        .then(function (response) {
          // handle success
          alert("Post 2 : " + JSON.stringify(response.data));
        }),
    ])
    .then(
      axios.spread(function (acct, perms) {
        // Both requests are now complete
        alert("Both requests are now complete");
      })
    );
};

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

    const getDataUsingSimpleGetCall = () => {
      axios
        .get("http://bdadshop.com/api/Home/indexnew")
        .then(function (response) {
          // handle success
          // alert(JSON.stringify(response.data.bannervip));
          // setDatabanner(response.data.bannervip);
          // alert(JSON.stringify(databaner));
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

    if (loadingFont) {
      return <AppLoading />;
    }
    return (
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "#3370b3",
            alignItems: "center",
            paddingBottom: 10,
            paddingTop: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Category")}
            style={{
              position: "absolute",
              left: 10,
              paddingTop: 8,
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: 25, height: 25, left: 10 }}
              source={require("../assets/images/left-arrow.png")}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "Kanit",
              color: "#FFF",
              fontSize: 14,
            }}
          >
            ก่อสร้างและวัสดุอุปกรณ์
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
            style={{
              position: "absolute",
              right: 20,
              paddingTop: 8,
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: 25,
                height: 25,
                left: 10,
                tintColor: "#FFF",
              }}
              source={require("../assets/images/icons/home.png")}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "#e5eff8",
            width: "100%",
            paddingBottom: 10,
            paddingTop: 10,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              paddingLeft: 20,
              fontSize: 16,
              color: "#3593c9",
              ...styles.fontDS,
            }}
          >
            หมวดหมู่ย่อย {"     "}"ก่อสร้างและวัสดุอุปกรณ์"
          </Text>
        </View>
        <ScrollView>
          <View
            style={{
              paddingLeft: 30,
              paddingBottom: 20,
              paddingTop: 20,
              borderBottomColor: "#ededed",
              borderBottomWidth: 2,
            }}
          >
            <TouchableOpacity onPress={getDataUsingSimpleGetCall}>
              <Text style={{ ...styles.fontDS, fontSize: 16 }}>กระจก</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingLeft: 30,
              paddingBottom: 20,
              paddingTop: 20,
              borderBottomColor: "#ededed",
              borderBottomWidth: 2,
            }}
          >
            <Text style={{ ...styles.fontDS, fontSize: 16 }}>กระเช้าไฟฟ้า</Text>
          </View>
          <View
            style={{
              paddingLeft: 30,
              paddingBottom: 20,
              paddingTop: 20,
              borderBottomColor: "#ededed",
              borderBottomWidth: 2,
            }}
          >
            <TouchableOpacity onPress={getDataUsingSimpleGetCall}>
              <Text style={{ ...styles.fontDS, fontSize: 16 }}>
                กำหนดตัวแปร
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  fontDS: {
    fontFamily: "Kanit",
  },
});
