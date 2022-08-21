/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import SignUpScreen from './src/screens/SignUpScreen';
import {StyleSheet} from 'react-native';


const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen component={SignUpScreen} name="SignUp" />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <SignUpScreen />
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC"
  }
});

export default App;
