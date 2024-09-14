import React, {useState, useEffect} from "react";
import { View, Text, Pressable } from "react-native";


export default function CounterWithStateEffect(){

    const messages = [
        "Hola",
        "Conversanding",
        "Adios"
    ]

    const [number, setNumber] = useState(0);
    const [message, setMessage] = useState('')

    useEffect(()=>{
        setMessage(messages[number%3])
    }, [number])

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
          onPress={() => {
            setNumber(number - 1);
          }}
        >
            <Text>-</Text>
        </Pressable>
        <Text>{number}</Text>
        <Pressable
          onPress={() => {
            setNumber(number + 1);
          }}
        >
          <Text>+</Text>
        </Pressable>
        <Text>{message}</Text>
      </View>
    );
}