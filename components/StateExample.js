

import React,{useState,useEffect} from 'react';

import {
  Text,
  View
} from 'react-native';


export const StateExample=(props)=>{

    const {data}=props

   console.log("main application log "+data)

return(

  <View>
  
    <Text style={{fontSize:100}}>{data}</Text>

  </View>
)

}

