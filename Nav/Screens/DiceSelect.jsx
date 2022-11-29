import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Touchable, SafeAreaView, FlatList} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

//import DiceList from './components/DiceList';


const DiceSelect = props => {

    const [diceroll, setDiceRoll] = useState();
    const [diceList, setDiceList] = useState([]);

    const randomRoll = () =>{

        setDiceRoll(Math.floor(Math.random() * (props.route.params.dice)) + 1);

        // setDiceList([...diceroll, diceroll]);

    };

    const addList = () =>{

        const newArray = [...diceList, diceroll]

        setDiceList(newArray)

        // setDiceList([...diceroll, diceroll]);

    };

    return(

        <SafeAreaView style={styles.SafeAreaView}>

            <View style={styles.rollingdice}>

            <View>
                <Text style={styles.text}> Dice: {props.route.params.dice}  </Text>
            </View>

            <View>
                <TouchableOpacity style={styles.touchable} onPress={ () => {randomRoll();}}  > Roll Dice </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.text}>
                    {diceroll}
                </Text>
            </View>







            </View>
            
            <View style={styles.flatList}>
                <Text> DICE ROLL HISTORY</Text>
        


                    
                    {/* <View>
                        <Text>{diceList[0]}</Text>
                    </View> */}
                   {/* {diceList.map(
                        (item) => (
                            <View>  {diceList.item}   </View>



                        )


                    )} */}

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
          padding: 20,
          fontSize: 40,
          
        },

        text:{
            fontSize: 90,
            
          }
      
      });


export default DiceSelect;
