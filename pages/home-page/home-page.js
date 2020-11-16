import React, {useState} from 'react';
import {Text,View, Button} from 'react-native';
import CardComponent from '../../components/Card-Component';

function HomePage({navigation}){
    return(
        <View>
            <Text>Soy home Page</Text>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <Button title="ir a contact" onPress={() => navigation.navigate('Contact')}></Button>
        </View>
    )
}

export default HomePage 