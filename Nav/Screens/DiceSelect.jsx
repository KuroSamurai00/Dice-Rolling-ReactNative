import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Touchable, SafeAreaView} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

//import DiceList from './components/DiceList';


const DiceSelect = props => {

    const [diceNumber, setDiceNumber] = useState(0);


    return(

        <SafeAreaView style={styles.SafeAreaView}>

            <View style={styles.rollingdice}>

            <View>
                <Text> Dice: {diceNumber}  </Text>
            </View>

            <View>
                <Text> this is where dice would roll</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.touchable}> Roll Dice </TouchableOpacity>
            </View>






            </View>
            
            <View style={styles.flatList}>
                <Text> DICE ROLL HISTORY</Text>
                <ScrollView>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                <Text> asfafafv</Text>
                
            </ScrollView>




            </View>

            


        </SafeAreaView>


    );
        
    }
    const styles = StyleSheet.create({
        SafeAreaView: {
            flex: 1,
            backgroundColor: '#00c0ff',
            
        },

        rollingdice: {
            flex: 1,
            justifyContent:'center',
            alignItems:'center',
            
            
        },
        flatList: {
            flex: 1,
            backgroundColor: '#55aedf',
            
        },
      
        font:{
          fontSize: 40,
          fontWeight: 'bold',
        },
      
        touchable:{
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 5,
          
        },
      
      });


export default DiceSelect;
