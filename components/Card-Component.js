// clase 21/09/2020
import React from 'react';

import {TouchableHighlight, Text, StyleSheet} from 'react-native';

const CardComponent = () =>{
    return(
            <TouchableHighlight style={cardStyles.card}>
                <Text style={{color:"red"}}>External component</Text>
            </TouchableHighlight>
        );
}
const cardStyles = StyleSheet.create({
        card:{
            width: 100,
            height: 100,
            backgroundColor: "#00796b",
            margin: 10,
            borderRadius: 5
        }
});

export default CardComponent;