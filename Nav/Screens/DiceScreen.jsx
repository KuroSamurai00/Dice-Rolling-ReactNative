import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView,  } from 'react-native';

import DiceSelect from './DiceSelect';

const DiceScreen = props => {

const [diceSelect, setDiceSelect] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.buttonpadding}>
        <TouchableOpacity style={styles.touchable}onPress={ () => props.navigation.navigate('DiceSelect', {dice: 4})   } > 
          <Text style={styles.font}> Dice 4 </Text> 
        </TouchableOpacity> 
      </View>

      <View style={styles.buttonpadding}>
      <TouchableOpacity style={styles.touchable}onPress={ () => props.navigation.navigate('DiceSelect', {dice: 6})   } > 
          <Text style={styles.font}> Dice 6 </Text> 
        </TouchableOpacity> 
      </View>

      <View style={styles.buttonpadding}>
      <TouchableOpacity style={styles.touchable}onPress={ () => props.navigation.navigate('DiceSelect', {dice: 8})   } > 
          <Text style={styles.font}> Dice 8 </Text> 
        </TouchableOpacity> 
      </View>


      <View style={styles.buttonpadding}>
      <TouchableOpacity style={styles.touchable}onPress={ () => props.navigation.navigate('DiceSelect', {dice: 10})   } > 
          <Text style={styles.font}> Dice 10 </Text> 
        </TouchableOpacity>  
      </View>

      <View style={styles.buttonpadding}>
      <TouchableOpacity style={styles.touchable}onPress={ () => props.navigation.navigate('DiceSelect', {dice: 20})   } > 
          <Text style={styles.font}> Dice 20 </Text> 
        </TouchableOpacity>  
      </View>

      <View style={styles.buttonpadding}>
      <TouchableOpacity style={styles.touchable}onPress={ () => props.navigation.navigate('DiceSelect', {dice: 100})   } > 
          <Text style={styles.font}> Dice 100 </Text> 
        </TouchableOpacity>  
      </View>

      
    </SafeAreaView>
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

  touchable:{
    backgroundColor: 'white',
    borderRadius: 10,
    padding:0 ,
    
  },

  buttonpadding:{
    padding: 15,
  },
   

});
export default DiceScreen;