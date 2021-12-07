

import React, { useState, useEffect, useRef } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, Button, TextInput
} from 'react-native';
import { AuthContext } from './context/context';
import { StateExample } from './components/StateExample';
import { UseEffectExample } from './components/UseEffectExample';
import { UseRefExample } from './components/UseRefExample';
import { UseContextExample } from './components/UseContextExample';
import { UseReducerExample } from './components/UseReducerExample';
import { UseCallBackExample } from './components/UseCallBackExample';
import { UseMemoExample } from './components/UseMemoExample';


const App = () => {
  const [count, setCount] = useState(0);


  return (

    <View style={{ flex: 1, marginTop: 100 }}>

      {/* <StateExample data={count} />
      <UseEffectExample/> */}

      {/* <AuthContext.Provider value={count}>
      <UseContextExample/>
      </AuthContext.Provider> */}

      {/* <Button title="inc" onPress={() => setCount(count + 10)}></Button> */}
      {/* <UseRefExample/> */}

      {/* <UseReducerExample/> */}

      {/* <UseCallBackExample/> */}

      <UseMemoExample/>

    </View>
  )

}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
