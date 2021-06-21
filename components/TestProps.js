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

import { Card } from "react-native-paper";
import axios from "axios";

function getAPI() {
  axios
    .get("http://bdadshop.com/api/Home/indexnew")
    .then(function (response) {
      // handle success
      // alert(JSON.stringify(response.data.bannervip));

      const Banner = JSON.stringify(response.data.bannervip);
      <View>
        <Text style={{}}>
          <Banner />
        </Text>
      </View>;
    })
    .catch(function (error) {
      // handle error
      alert(error.message);
    })
    .finally(function () {
      // always executed
      alert("Finally called");
    });
}

export default function TestProps() {
  const [{ data, loading, error }, refetch] = useAxios(
    "http://bdadshop.com/api/Home/indexnew",
    {
      manual: true,
    }
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error!</Text>;

  return (
    <View style={styles.container}>
      {/* <Button
        onPress={() =>
          refetch({
            data: {
              // delay: 1,
            },
          })
        }
        title="Refetch"
      />
      <Text style={styles.paragraph}>{JSON.stringify(data)}</Text> */}
      <ScrollView style={{}}>
        <TouchableOpacity onPress={getAPI}>
          <Text>getAPI</Text>
        </TouchableOpacity>
        <getAPI />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 10,
    alignItems: "center",
  },
});
