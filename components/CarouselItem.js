import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions,ImageBackground } from 'react-native'

const { width, height } = Dimensions.get('window')


const CarouselItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <ImageBackground  source={require('../assets/images/bgBanner.jpg')} 
             style={{
                flex: 1,
                resizeMode: "cover",
                justifyContent: "center"
                }}>
            <View style={styles.cardView}>
                <Image style={styles.image} source={{ uri: item.url }} />
            </View>
        </ImageBackground>
        </View>
       
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
            flexDirection: "column"
        },

        image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
        },

    cardView: {
        flex: 1,
        width: width - 20,
        height: height / 4.5,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        elevation: 5,
    },

   
    image: {
        width: width -20,
        height: height / 4.5,
        borderRadius: 10
    },
   
})

export default CarouselItem