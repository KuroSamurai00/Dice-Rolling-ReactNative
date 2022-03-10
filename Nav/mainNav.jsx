import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import DiceScreen from './Screens/DiceScreen';
import DiceSelect from './Screens/DiceSelect';

const Stack = createStackNavigator();

function HomeScreenStack(){

    return(

        <Stack.Navigator>

           
            <Stack.Screen name='DiceScreen' component = {DiceScreen} />

            <Stack.Screen name='DiceSelect' component = {DiceSelect} />
          

        </Stack.Navigator>


    );
}

export {HomeScreenStack};

