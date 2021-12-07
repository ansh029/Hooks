import React,{useState,useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,Button
} from 'react-native';


export const UseEffectExample=()=>{

    const[count,setCount]=useState(0);
    const[toggle,setToggle]=useState(false);

    

    useEffect(()=>{
      console.log("use effect is calling log",count+" "+toggle)

      return () => {
        console.log("Removing from DOM")
      };

    },[count,toggle])
  
return(

  <View>
     
    <Text style={{fontSize:50}}>hello use effect is calling</Text>
    <View style={{marginTop:10,marginBottom:10,flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}}>
    <Button  title="update count" onPress={()=>setCount(count+1)}></Button>
    <Button  title="update toggle" onPress={()=>setToggle(!toggle)}></Button>
    </View>
    
  </View>
)

}

