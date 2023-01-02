import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'


const DiceSelect = props => {

    const [diceroll, setDiceRoll] = useState("-");
    const [diceList, setDiceList] = useState([]);

    const randomRoll = () => {

        setDiceRoll(Math.floor(Math.random() * (props.route.params.dice)) + 1);

        // setDiceList([...diceroll, diceroll]);

    };



    return (

        <SafeAreaView style={styles.SafeAreaView}>

            <View style={styles.dicebar}>

                <View>
                    <Text style={styles.text}> Dice: {props.route.params.dice} </Text>
                </View>

            </View>

            <View style={styles.rollingdice}>
                <Text style={styles.textroll}>
                    {diceroll}
                </Text>
            </View>

            <View style={styles.buttonbar}>

                <TouchableOpacity style={styles.touchable} onPress={() => { randomRoll(); }}  >
                    <Text style={styles.text}> Roll Dice </Text>
                </TouchableOpacity>


            </View>

        </SafeAreaView>


    );

}
const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        backgroundColor: '#00c0ff',

    },

    dicebar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    rollingdice: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonbar: {
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
        padding: 20,
        fontSize: 40,

    },

    text: {
        fontSize: 30,
    },

    textroll: {
        fontSize: 170,
    },

});


export default DiceSelect;
