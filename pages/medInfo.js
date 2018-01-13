import React, { Component } from 'react';
import { Button, View, StyleSheet, Text, TouchableHighlight, TextInput } from 'react-native';

export default class MedInfo extends Component {
    render(){
        return(
            <View>
            <Text>
                Medical Info
            </Text>
            <Text>
                Age
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Age"
            >
            </TextInput>
            <Text>
                Suffered from heart conditions in the past? (Yes/No)
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Yes or No"
            >
            </TextInput>
            <Text>
                Does your family have a history of heart conditions? (Yes/No)
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Yes or No"
            >
            </TextInput>
            <Text>
                List Medications
            </Text>
            <TextInput
                style={styles.input}
                placeholder="List Medications separated by commas"
            >
            </TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48bbec'
    },
})