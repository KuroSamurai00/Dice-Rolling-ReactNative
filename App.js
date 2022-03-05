import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView,  } from 'react-native';



const App = props => {

const [diceSelect, setDiceSelect] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      
      <View>
        <TouchableOpacity onPress={ () => props.navigation.navigate('DiceScreen', {dice4: 4})   } > 
          <Text style={styles.font}> Dice 4 </Text> 
        </TouchableOpacity> 
      </View>

      <View>
        <TouchableOpacity> 
          <Text style={styles.font}> Dice 6 </Text> 
        </TouchableOpacity> 
      </View>

      <View>
        <TouchableOpacity> 
          <Text style={styles.font}> Dice 8 </Text> 
        </TouchableOpacity> 
      </View>


      <View>
        <TouchableOpacity> 
          <Text style={styles.font}> Dice 10 </Text> 
        </TouchableOpacity> 
      </View>

      <View>
        <TouchableOpacity> 
          <Text style={styles.font}> Dice 20 </Text> 
        </TouchableOpacity> 
      </View>

      <View>
        <TouchableOpacity> 
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

});
export default App;