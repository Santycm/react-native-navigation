import React, { useReducer } from "react";
import { View, Text, Pressable } from "react-native";

import CounterWithReducer from "./src/screens/CounterWIthReducer";
import CounterWithStateEffect from "./src/screens/CounterWithStateEffect";

import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator()
const Stack = createStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="CounterWithReducer" component={CounterWithReducer} />
    </Stack.Navigator>
  )
}

function MyDrawer(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="CounterWithReducer" component={CounterWithReducer}/>
    </Drawer.Navigator>
  )
}


function MyTabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="CounterWithReducer" component={CounterWithReducer}/>
      <Tab.Screen name="CounterWithStateEffect" component={CounterWithStateEffect}/>
    </Tab.Navigator>
  )
}


export default function App() {

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
      <NavigationContainer>
        <MyDrawer/>
      </NavigationContainer>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </View>
  );
}
