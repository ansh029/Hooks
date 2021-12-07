import React, { useState, useEffect, useRef, useCallback } from 'react';

import {
    View, Button, TextInput
} from 'react-native';


export const UseCallBackExample = () => {

    const [numbers, setNumbers] = useState({num1:0,num2:0});
    const [result, setResult] = useState(0);

    useEffect(()=>{
        console.log(numbers)
     
      },[numbers,result])


    const memoizedCallback=useCallback(()=>{

        setResult(numbers.num1+numbers.num2);
        console.log("result is"+result)
  
      },[numbers,result])


    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
        <TextInput
            style={{ width: 250, height: 50, borderColor: "#000000", borderWidth: 2 }}
            onChangeText={(value) => setNumbers({num1:+value,num2:numbers.num2})}
        />

        <TextInput
            style={{ width: 250, height: 50, borderColor: "#000000", borderWidth: 2, marginTop: 10 }}
            onChangeText={(value) => setNumbers({num1:numbers.num1,num2:+value})}
           

        />

        <View style={{ marginTop: 50 }}>
            <Button title="Result" onPress={memoizedCallback} ></Button>
        </View>

        </View>

    )
}