

import React, { useState, useEffect, useRef } from 'react';

import {
    View, Button, TextInput
} from 'react-native';


export const UseRefExample = () => {

    const [TI1, setTI1] = useState('');
    const [TI2, setTI2] = useState('');
    const inputEl1 = useRef();
    const inputEl2 = useRef();

    const onButtonClick = () => {

        inputEl1.current.clear()
        inputEl2.current.clear()
    };

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <TextInput
                style={{ width: 250, height: 50, borderColor: "#000000", borderWidth: 2 }}
                name="first_name"
                placeholder="First name"
                ref={inputEl1}
                onChangeText={(text) => setTI1(text)}
                value={TI1}
                onSubmitEditing={() => {
                    inputEl2.current.focus();
                }}
            />

            <TextInput
                style={{ width: 250, height: 50, borderColor: "#000000", borderWidth: 2, marginTop: 10 }}
                name="last_name"
                placeholder="Last name"
                ref={inputEl2}
                onChangeText={(text) => setTI2(text)}
                value={TI2}

            />

            <View style={{ marginTop: 50 }}>
                <Button title="Click" onPress={onButtonClick} ></Button>
            </View>

        </View>
    )

}

