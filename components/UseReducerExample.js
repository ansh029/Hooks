import React, { useReducer } from 'react';

import {
  Button,
  Text,
  View
} from 'react-native';
import myReducer, { init } from '../reducer/MainReducer';


export const UseReducerExample=(props)=>{

    const [state, dispatch] = useReducer(myReducer,undefined,init);
return(

 
  <View>
      { console.log(state.count)}
    <Text style={{fontSize:100}}>{state.count}</Text>
    <Button title="increase counter" onPress={() =>  dispatch({ type: 'inc'})}></Button>
    <Button title="decrease counter" onPress={() =>  dispatch({ type: 'dec'})}></Button>

    <Button title="reset" onPress={() =>  dispatch({ type: 'reset',payload:{count:0} })}></Button>
  </View>
)

}