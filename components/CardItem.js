import React, { Component } from "react";
import { StyleSheet, Text, View , Image } from "react-native";
import { Card, Button, Icon } from 'react-native-elements'
class CardItem extends Component {
    
  render() {
    return (
                <View style={styles.container}>
                    <View style={styles.card1}>
                        <Card.Image source={{uri:'http://cms.bdadshop.com/images/products/small/5658.png?422866427'}}>
                        </Card.Image>
                        <Text style={styles.titleName}>
                            Title Name สินค้าของฉัน 12247414
                        </Text>

                        <Text style={styles.price}>
                            ( ราคา ติดต่อผู้ขาย )
                        </Text>
                        <Text style={styles.productName}>
                        แบรนด์เด็กซ์ ไดเร็คทอรี่ จำกัดsssssssssssssssssssssssssssssssssssssssss
                        </Text>
                    </View>
               </View>
               
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:"50%",
    justifyContent: "center",
   
   
},
    card1:{
        
        margin:3,
        borderWidth:1,
        borderColor:"#ddd9",
        padding:10,
        backgroundColor:"#fff",
        
       
    },

    titleName: {
        fontFamily: "KanitBold",
        fontSize: 14,
        flexWrap:"wrap",
        height:50,

    },
    price:{
        color:"#ff8a26",
        fontFamily: "Kanit",
        fontSize: 14,
        marginBottom:10,
    },
    productName:{
        color:"#676767",
        fontFamily: "Kanit",
        fontSize: 12,
        flexWrap:"wrap",
        height:20,
    }
    

  
 
});

export default CardItem;