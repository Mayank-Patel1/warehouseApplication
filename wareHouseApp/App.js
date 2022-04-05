/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { height } from '@mui/system';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import logo from './images/logo.png';

const App = () => {
  return (
    <View style={styles.container} >
      <Image
        style={{height: 100, width: 400}}
        source={logo}
      />
      <view style={{paddingTop:'20%'}}></view>
      <TextInput style={styles.inputView}
        placeholder="username"
      />
      <view style={{paddingTop:'10%'}}></view>
      <TextInput style={styles.inputView}
        placeholder="password"
        secureTextEntry={true}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    paddingTop: '200px',
  },
  inputView:{
    borderRadius: '50px',
    backgroundColor: 'lightgreen',
    width: "60%",
    height: "5%",
    textAlign: 'center'
  }
});

export default App;