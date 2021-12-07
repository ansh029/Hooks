

import React, { useContext } from 'react';

import {
  Text,
  View
} from 'react-native';
import { AuthContext } from '../context/context';


export const UseContextChild = () => {

  const value = useContext(AuthContext);


  return (

    <View>

      <Text style={{ fontSize: 100 }}>{value}</Text>

    </View>


  )

}
