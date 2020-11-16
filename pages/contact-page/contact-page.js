import React, {useState} from 'react';
import {Text,View, Button} from 'react-native';

function ContactPage({navigation}){
    return(
        <View>
            <Text>Soy home Page</Text>
            <Button title="ir a About" onPress={() => navigation.navigate('About')}></Button>
        </View>
    )
}

export default ContactPage