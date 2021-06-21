import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const BrandScreen = () => {
  const [modalVisible, setModalFilter] = useState(false);

  const [modalVisibleList, setModalList] = useState(false);

  const getDataUsingSimpleGetCall = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
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
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "foo",
        body: "bar",
        userId: 1,
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

  const Images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png",
    "http://cms.bdadshop.com//images//bannerVip//18_th.png",
    "https://cdn.logo.com/hotlink-ok/logo-social.png",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mr-bread-logo-design-template-8a8bf7264deccf537f8dd318785ebd6f_screen.jpg?ts=1579209248",
  ];

  const ListBrand = (props) => {
    return (
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          marginLeft: "3.5%",
          marginRight: "3.5%",
        }}
      >
        {Images.map((image, index) => (
          <View
            style={{
              width: "29%",
              marginLeft: "1%",
              marginRight: "1%",
              paddingTop: 10,
            }}
          >
            <TouchableOpacity>
              <Image
                key={index}
                source={{ uri: image }}
                style={{
                  width: "100%",
                  height: 125,
                  borderColor: "#CCC",
                  borderWidth: 1,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  };

  let [fontsLoaded] = useFonts({
    Kanit: require("../assets/fonts/Kanit-Light.ttf"),
    KanitBold: require("../assets/fonts/Kanit-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{}}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 30,
          paddingTop: 10,
          backgroundColor: "#83b8e0",
          width: "100%",
        }}
      >
        <View style={{ flex: 1, width: "50%" }}>
          <TouchableOpacity
            style={{
              left: 0,
              position: "absolute",
              textAlign: "left",
              flexDirection: "row",
              top: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
            // onPress={() => setModalVisible(true)}
            onPress={() => setModalFilter(true)}
          >
            <Image
              source={require("../assets/images/icons/filter-filled-tool-symbol.png")}
              style={{ width: 15, height: 15, tintColor: "#FFF" }}
            />
            <Text
              style={{
                paddingLeft: 5,
                fontSize: 16,
                color: "#FFFFFF",
                ...styles.fontDS,
              }}
            >
              ตัวกรอง
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, width: "50%" }}>
          <TouchableOpacity
            style={{
              right: 0,
              position: "absolute",
              textAlign: "right",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => setModalList(true)}
          >
            <Image
              source={require("../assets/images/icons/arrows-up-and-down-filled-triangles.png")}
              style={{ width: 15, height: 15, tintColor: "#FFF" }}
            />
            <Text
              style={{
                paddingLeft: 5,
                fontSize: 16,
                color: "#FFFFFF",
                ...styles.fontDS,
              }}
            >
              จัดเรียงตาม
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalFilter(!modalVisible);
        }}
      >
        <View style={styles.spaceModal}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>ตัวกรอง</Text>
            <TouchableOpacity style={{}}>
              <Text
                style={{
                  textAlign: "left",
                  fontFamily: "Kanit",
                  borderBottomColor: "#EFEFEF",
                  borderBottomWidth: 2,
                  padding: 10,
                }}
              >
                แบรนด์ทั้งหมด
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{}}>
              <Text
                style={{
                  textAlign: "left",
                  fontFamily: "Kanit",
                  borderBottomColor: "#EFEFEF",
                  borderBottomWidth: 2,
                  padding: 10,
                }}
              >
                แบรนด์แนะนำ
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalFilter(!modalVisible)}
            >
              <Text style={styles.textStyle}>ปิด</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleList}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalList(!modalVisibleList);
        }}
      >
        <View style={styles.spaceModal}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>จัดเรียงตาม</Text>
            <TouchableOpacity style={{}}>
              <Text
                style={{
                  textAlign: "left",
                  fontFamily: "Kanit",
                  borderBottomColor: "#EFEFEF",
                  borderBottomWidth: 2,
                  padding: 10,
                }}
              >
                จัดเรียง A-Z ก-ฮ
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalList(!modalVisibleList)}
            >
              <Text style={styles.textStyle}>ปิด</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ScrollView style={{ marginBottom: 100 }}>
        <ListBrand />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  spaceModal: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#00000021",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    marginTop: 20,
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontFamily: "Kanit",
  },
  fontDS: {
    fontFamily: "Kanit",
  },
  modalText: {
    textAlign: "center",
    paddingBottom: 10,
    fontSize: 18,
    borderBottomColor: "#ECECEC",
    borderBottomWidth: 2,
    fontFamily: "KanitBold",
    width: "100%",
  },
});

export default BrandScreen;
