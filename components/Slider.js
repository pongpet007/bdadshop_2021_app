import * as React from "react";
import {
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Text,
  View,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { width } = Dimensions.get("window");
const height = width * 0.6;

export default class Slide extends React.Component {
  state = {
    active: 0,
  };
  change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={this.change}
          showsHorizontalScrollIndicator={false}
          style={styles.container}
        >
          {this.props.images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.image} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    
  },

  image: {
    width: 500,
    height: height * 0.95,
    marginLeft: width * 0.025,
    marginRight: width * 0.25,
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: -30,
    alignSelf: "center",
  },
  paginationText: {
    fontSize: width / 30,
    color: "#888888",

    margin: 3,
  },
  paginationActiveText: {
    fontSize: width / 30,
    color: "#333",

    margin: 3,
  },
});
