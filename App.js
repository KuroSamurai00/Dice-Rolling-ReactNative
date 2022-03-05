import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView,  } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {HomeScreenStack} from './Nav/mainNav';


const App = props => {

  return (
      <NavigationContainer>

        <HomeScreenStack />

      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00c0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  font:{
    fontSize: 40,
    fontWeight: 'bold',
  },

});
export default App;