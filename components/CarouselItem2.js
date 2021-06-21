import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions,ImageBackground } from 'react-native'

const { width, height } = Dimensions.get('window')


const CarouselItem2 = ({ item }) => {
    return (
        <View style={styles.container}>
           
            <View style={styles.cardView}>
                <Image style={styles.image} source={{ uri: item.url }} />
            </View>
        
        </View>
       
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
            flexDirection: "column"
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

export default CarouselItem2