import React, { useReducer } from "react";
import { View, Text, Pressable } from "react-native";

export default function App() {

  const initialState = {counter1: 0, message:''}

  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return{
          ...state,
          counter1: state.counter1 + 1,
          message: state.message = "HOLA"
        };
      case "dec":
        if (state.counter1 === 0) {
          return {
            ...state,
            counter1: 0,
            message:"TAL VEZ"
          };
        }
        return {
          ...state,
          counter1: state.counter1 - 1,
          message:"ADIOS"
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
      }}
    >
      <Pressable
        style={{ borderColor: "black", borderWidth: 1, width: 20 }}
        onPress={() => {
          dispatch({ type: "dec" });
        }}
      >
        <Text>-</Text>
      </Pressable>
      <Text>{state.counter1}</Text>
      <Text>{state.message}</Text>
      <Pressable
        style={{ borderBlockColor: "black", borderWidth: 1, width: 20 }}
        onPress={() => {
          dispatch({ type: "add" });
        }}
      >
        <Text>+</Text>
      </Pressable>
    </View>
  );
}
