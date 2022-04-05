/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import { height } from '@mui/system';
 import { StatusBar } from 'expo-status-bar';
 import { StyleSheet, Text, View, Image } from 'react-native';
 import logo from './images/logo.png';
 
 const App = () => {
   return (
     <View style={styles.container} >
       <Image
         style={{height: 100, width: 400}}
         source={logo}
       />
       <Text style={styles.text}>Open up meet to start working on your app!</Text>
       <StatusBar style="auto" />
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignContent: 'center',
     justifyContent: 'center',
     backgroundColor: 'white',
   },
   text: {
     justifyContent: 'center',
     alignContent: 'center',
   },
 });
 
 export default App;