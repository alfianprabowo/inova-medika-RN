import React, { Component } from 'react';

import {
    TextInput
} from 'react-native';

export default function CustomTextInput() {

    return (
        <TextInput style={styles.input}></TextInput>
    );
};

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 0.5,
        height: 48,
        borderBottomColor: "#8e93a1",
        marginBottom: 30,
    }
});