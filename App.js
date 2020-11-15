
import React from 'react';
import { ColorPropType, StyleSheet, Text, View } from 'react-native';

const App = () => {
  return(
  <View style={{
    flex: 1, 
    flexDirection: "column"
   
  }}>
    <View style={{flex: 1, backgroundColor: 'yellow', flexDirection:"row"}}>
        <View style={{flex:1, backgroundColor:'brown'}} ></View>
        <View style={{flex: 1}}></View>  
      </View>
      <View style={{flex: 1, backgroundColor: 'blue', flexDirection: "row"}}>
        <View style={{flex: 1, backgroundColor: 'pink'}}></View>
        <View style={{flex:1}}></View>
      </View>
      <View style={{flex: 1, backgroundColor: 'red', flexDirection: "row"}}>
        <View style={{flex: 1, backgroundColor: 'black'}}></View>
        <View style={{flex:1}}></View>
      </View>
   </View>  
  );

}
export default App;