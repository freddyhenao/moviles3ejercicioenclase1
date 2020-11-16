
//  +++++++++++++++++          Inicio   clase 14/09/2020 pnatalla diseño 
//  *****************base de inicio Proyecto React Native


// import React, {useState} from 'react';
// import {
//   ColorPropType,
//   StyleSheet,
//   Text,
//   TextInput,
//   Button,
//   View,
//   Alert,
//   TouchableHighlight,
//   Dimensions,
//   Image
// } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import CardComponent from './components/CardComponent';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';


// export default App= () =>{
//   return(
//     <View>    
//     </View>
//   )
// }
//**** fin de base proyecto Rect Native*/
// const App = () => {
//   return(
//     <View style={styles.container}>
//       <View style={styles.box1}>
//         <View style={styles.box2}>
//           <Text style={styles.text}>card1 </Text>
//         </View>
//         <View style={styles.box3}>
//           <Button title="Press Me" onPress={pressMe}></Button>
//           </View>  
//       </View>
//       <View style={styles.box4}>
//         <View style={styles.box5}>
//           <TouchableHighlight style={styles.touchButton} onPress={pre}>
//             <Text>Click Me</Text>
//           </TouchableHighlight>
//         </View>
//         <View style={styles.box6}></View>
//       </View>
//       <View style={styles.box7}>
//         <View style={styles.box8}></View>
//         <View style={styles.box9}></View>
//       </View>
//    </View>  
//   );
//  +++++++++++++++++          Inicio Objetos    clase 14/09/2020  *************
  // box1: {
  //   flex: 1,
  //   flexDirection: "row"
  // },
  // box2: {
  //   flex: 1,
  //   backgroundColor: "brown",
  //   margin: 20,
  //   borderRadius: 15,
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  // box3: {
  //   flex: 1,
  //   backgroundColor: "purple",
  //   margin: 20,
  //   borderRadius: 15,
  //   alignItems: "center",
  //   justifyContent: "center"

  // },
  // box4: {
  //   flex: 1,
  //   flexDirection: "row"
  // },
  // box5: {
  //   flex: 1,
  //   backgroundColor: "blue",
  //   margin: 20,
  //   borderRadius: 15,
  //   borderWidth: 2,
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  // box6: {
  //   flex: 1,
  //   backgroundColor: "yellow",
  //   margin: 20,
  //   borderRadius: 15
  // },
  // box7: {
  //   flex: 1,
  //   flexDirection: "row"
  // },
  // box8: {
  //   flex: 1,
  //   backgroundColor: "black",
  //   margin: 20,
  //   borderRadius: 15
  // },
  // box9: {
  //   flex: 1,
  //   backgroundColor: "green",
  //   margin: 20,
  //   borderRadius: 15
  // },
  // text: {
  //   color: "white",
  //   fontSize: 20
  // },
  // touchButton: {
  //   padding: 20,
  //   backgroundColor: "#3f51b5",
  //   flexDirection: "row",
  //   borderRadius: 10
  // },
  // box10: {
  //   flex: 1,
  //   backgroundColor: "#03a9f4",
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  // box11: {
  //   flex: 1,
  //   backgroundColor: "white"
  // },
  // box12: {
  //   width: Dimensions.get("screen").width * 0.9,
  //   height: Dimensions.get("screen").height * 0.5,
  //   backgroundColor: "white",
  //   position: "absolute",
  //   left: Dimensions.get("screen").width * 0.05,
  //   right: Dimensions.get("screen").width * 0.05,
  //   top: Dimensions.get("screen").height * 0.35,
  //   borderRadius: 10,
  // },
 

//  *******************        clase 14/09/2020   ejempli de pantalla citas medicas **************************
// const App =() =>{
//   return(
//     <View style={styles.container}>
//       <View style={styles.box10}>
//         <Image source={require('./assets/cita.png')}></Image>
//         <Text style={{fontSize:20, color:"white", fontWeight:"bold"}}>AGENDA DE CITAS MEDICAS</Text>
//       </View>
//       <View style={styles.box11}></View>
//       <View style={styles.box12}></View>
//     </View>
//   );
// }
//  +++++++++++++++++          fin Objetos    clase 14/09/2020 ***********
//
// *****************************       clase del 21/09/2020 inicio ingreso de datos, informacion de alrata a usuario

// import React, {useState} from 'react';
// import {
//   ColorPropType,
//   StyleSheet,
//   Text,
//   TextInput,
//   Button,
//   View,
//   Alert,
//   TouchableHighlight,
//   Dimensions,
//   Image
// } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import CardComponent from './components/CardComponent';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
//
// const App = () => {
//   const [name, setName]= useState('');                        // comando para almacenar en una variable el dato ingresado 
//   const [identification, setIdentification]= useState('');   // comando para almacenar en una variable el dato ingresado
//   const [city, setCity]= useState('');                       // comando para almacenar en una variable el dato ingresado
//   const [telephone, setTelephone]= useState('');            // comando para almacenar en una variable el dato ingresado   
//   const validateUserFields = () =>{
//     if(name =="" ){
//       Alert.alert("Ingrese el Nombre ");
//     }
//     else if (identification==""){
//       Alert.alert("Ingrese el Identificación Numero mayor de 5");
//     }
//     else if ( isNaN(identification)){
//       Alert.alert("Identificación debe ser Numerico");
//     }
//     else if (identification.length < 5 ){
//       Alert.alert("Identificación debe ser Numerico mayor de 5 caracteres");
//     }
//     else if (city==""){
//       Alert.alert("Ingrese la Ciudad ");
//     }
//     else if(telephone==""){
//       Alert.alert("Ingrese el Telefono ");
//     }
//   }
//   return (
//     <View style={styles.container}>
//       <CardComponent></CardComponent>
//       <CardComponent></CardComponent>
//       <TextInput style={styles.inputName} placeholder="Enter Name" onChangeText={text =>setName(text)}></TextInput>
//       <TextInput style={styles.inputIdentification} placeholder="Enter Identification (Number)" onChangeText={text =>setIdentification(text)}></TextInput>
//       <TextInput style={styles.inputCity} placeholder="Enter City" onChangeText={text =>setCity(text)}></TextInput>
//       <TextInput style={styles.inputTelephone} placeholder="Enter Telephone" onChangeText={text =>setTelephone(text)}></TextInput>
//       <TouchableHighlight style={styles.signUpButton}>
//         <Text style={styles.singUpTextButton} onPress={validateUserFields}>Sing Up</Text>
//       </TouchableHighlight>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center"
//   },
// ************************* Inicio Objetos  clase del 21/09/2020   *************************
  // inputName:{
  //   borderColor:"black",
  //   borderWidth: 1,
  //   borderRadius:5,
  //   width:  Dimensions.get("screen").width*0.9,
  //   // paddingLeft: Dimensions.get("screen").width * 0.3,
  //   // paddingRight: Dimensions.get("screen").width * 0.3,
  //   paddingTop: 5,
  //   paddingBottom: 5,
  //   paddingLeft: 10
  // },
  // inputIdentification:{
  //   borderColor:"black",
  //   borderWidth: 1,
  //   borderRadius:5,
  //   width:  Dimensions.get("screen").width*0.9,
  //   // paddingLeft: Dimensions.get("screen").width * 0.3,
  //   // paddingRight: Dimensions.get("screen").width * 0.3,
  //   paddingTop: 5,
  //   paddingBottom: 5,
  //   marginTop: 10,
  //   paddingLeft: 10
  // },
  // inputCity:{
  //   borderColor:"black",
  //   borderWidth: 1,
  //   borderRadius:5,
  //   width:  Dimensions.get("screen").width*0.9,
  //   // paddingLeft: Dimensions.get("screen").width * 0.3,
  //   // paddingRight: Dimensions.get("screen").width * 0.3,
  //   paddingTop: 5,
  //   paddingBottom: 5,
  //   marginTop: 10,
  //   paddingLeft: 10
  // },
  // inputTelephone:{
  //   borderColor:"black",
  //   borderWidth: 1,
  //   borderRadius:5,
  //   width:  Dimensions.get("screen").width*0.9,
  //   // paddingLeft: Dimensions.get("screen").width * 0.3,
  //   // paddingRight: Dimensions.get("screen").width * 0.3,
  //   paddingTop: 5,
  //   paddingBottom: 5,
  //   marginTop: 10,
  //   paddingLeft: 10
  // },
  // signUpButton: {
  //   marginTop: 10,
  //   backgroundColor: "#2196f3",
  //   padding: 10,
  //   borderRadius: 5,
  //   width:  Dimensions.get("screen").width*0.2,
  //   alignItems:"center"
  // },
  // singUpTextButton: {
  //   color:"white"
  // }
  // ************************* Fin  clase del 21/09/2020   ************************* 
   
   // *************************  Inicio clase del 05/10/2020   <navegacion entre pantallas  *************************
   // usamos la documentacion de reatNavigation https://reactnavigation.org/
   // todos los proyectos iniciales de ReactNavigation se debe isntalar 
   // inicios por https://reactnavigation.org/docs/getting-started 
   // Pasos 
   // 1.)  Installation 
   //     Install the required packages in your React Native project:  
   //            ( comando)     npm install @react-navigation/native  
   //         Nota: se copia en  " Terminal (bash) en otro puede presentar errores"")
   // 2.)  Installing dependencies into an Expo managed project
   //       ( comando)    expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
   //         Nota: se copia en  " Terminal (bash) en otro puede presentar errores"")
   //                Se debe instalr em el directorio donde se tiene el proyeto


   import React, {useState} from 'react';
   import {Text,View} from 'react-native';
   
   import { NavigationContainer } from '@react-navigation/native';
   import { createStackNavigator } from '@react-navigation/stack';
   import HomePage from './pages/home-page/home-page';
   import ContactPage from './pages/contact-page/contact-page';
   import AboutPage from './pages/about-page/about-page';

 const Stack = createStackNavigator();

 function App() {
  return(
    <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen name="Home" component={HomePage}/>
       <Stack.Screen name="Contact" component={ContactPage}/>
       <Stack.Screen name="About" component={AboutPage}/>
       </Stack.Navigator>
    </NavigationContainer>
  );  
}
export default App;