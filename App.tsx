/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text, SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';



function App() {
  return (
    <SafeAreaView style={styles.backgroundStyle}>

      <Text>Hello chat app</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  backgroundStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent:"center",
    paddingTop:"50%"
  }
});

export default App;
