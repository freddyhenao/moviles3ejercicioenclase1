import React from 'react';

import {TouchableHighlight, View, Text, StyleSheet,Image, Dimensions} from 'react-native';
const pressMe = () =>{
    Alert.alert("Peligro");
    }
const CardComponent = () =>{
    return(
            <View style={Styles.container}>
                <View style={Styles.box10}></View>
                <Image source={require('../assets/cita.png')}></Image> 
                <Text style={{fontSize:20, color:"white", fontWeight:"bold"}}>AGENDA DE CITAS MEDICAS </Text>
                <View style={Styles.box11}></View>
                <View style={Styles.box12}></View>
            </View>
        );
}
const Styles = StyleSheet.create({
        container:{
            flex: 1,
            flexDirection:"column"
        },
        box10:{
          flex: 1,
          backgroundColor: "#03a9f4",
          alignItems:"center",
          justifyContent: "center"
        },
        box11:{
            flex: 1,
            backgroundColor: "white"
        },
        box12:{
            width: Dimensions.get("screen").width*0.9,
            height: Dimensions.get("screen").height*0.5,
            backgroundColor: "white",
            position:"absolute",
            left: Dimensions.get("screen").width*0.05,
            right: Dimensions.get("screen").width*0.05,
            top: Dimensions.get("screen").height*0.35,
            borderRadius: 10,
        }
});

export default CardComponent;