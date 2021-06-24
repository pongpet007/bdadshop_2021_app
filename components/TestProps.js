import * as React from "react";
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
import useAxios from "axios-hooks";

import axios from "axios";

import { useSelector } from "react-redux";

const getAPI = () => {
  // const [databanner, setDatabanner] = useState([]);
  axios
    .get("http://bdadshop.com/api/Home/indexnew")
    .then(function (response) {
      // handle success
      alert(JSON.stringify(response.data.bannervip));
      // setDatabanner(response.data);
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

export default function TestProps() {
  const [{ data, loading, error }, refetch] = useAxios(
    "http://bdadshop.com/api/Home/indexnew",
    {
      manual: true,
    }
  );

  const calReducer = useSelector(({ calReducer }) => calReducer);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error!</Text>;

  return (
    <View style={styles.container}>
      <Text
        style={{
          width: "100%",
          height: 50,
          backgroundColor: "red",
          textAlign: "center",
        }}
      >
        Item 2 :Count {calReducer.count}
      </Text>
      <ScrollView style={{}}>
        <TouchableOpacity onPress={getAPI}>
          {/* {JSON.stringify(databanner)} */}
          {/* <Text>getAPI</Text> */}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
