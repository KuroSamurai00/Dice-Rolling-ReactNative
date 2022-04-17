import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Touchable, SafeAreaView } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';



const DiceSelect = props => {

    const {dice} = props.route.params; 
    const [randomGenerate, setRandomGenerate] = useState(0);
    const [diceRollList, setDiceRollList] = useState([]);

    const randomize = () => {
        const number = Math.floor(Math.random() * dice) + 1;
        return number;

    }




    return (

        <SafeAreaView style={styles.SafeAreaView}>

            <View style={styles.rollingdice}>

                <View style={styles.padding}>
                    <Text> Dice: {dice}  </Text>
                </View>

                <View>
                    <Text> this is where dice would roll</Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.touchable}
                    onPress={ () => {
                        
                        setRandomGenerate(randomize());
    
                        console.log(randomGenerate);

                       setDiceRollList([...diceRollList, randomGenerate]);

                       

                    }}

                    > Roll Dice </TouchableOpacity>
                </View>






            </View>

            <View style={styles.flatList}>
                <Text> DICE ROLL HISTORY</Text>

                <ScrollView>

                    <Text> asfafafv</Text>

                </ScrollView>

                <ScrollView>

                    <Text> {diceRollList} </Text>

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

    padding:{
        padding:15,
        },

    rollingdice: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
    flatList: {
        flex: 1,
        backgroundColor: '#55aedf',

    },

    font: {
        fontSize: 40,
        fontWeight: 'bold',
    },

    touchable: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,

    },

});


export default DiceSelect;
