import React, { Component } from 'react';
import { Button, View, StyleSheet, Text, TouchableHighlight, TextInput } from 'react-native';

export default class Patient extends Component {
    render(){
        return(
            <View style = {styles.container}>
            <Text style={{fontSize: 20}}>
                Enter your Information
            </Text>
            <View style = {styles.inside}>
            <TextInput
                style={styles.input}
                placeholder="Name 1"
            >
            </TextInput>
            <TextInput
                style={styles.input}
                placeholder="Emergency Contact Number 1"
            >
            </TextInput>
            <TextInput
                style={styles.input}
                placeholder="Name 2"
            >
            </TextInput>
            <TextInput
                style={styles.input}
                placeholder="Emergency Contact Number 2"
            >
            </TextInput>
            <TextInput
                style={styles.input}
                placeholder="Name 3"
            >
            </TextInput>
            <TextInput
                style={styles.input}
                placeholder="Emergency Contact Number 3"
            >
            </TextInput>
            </View>
            <Button
                title = "Continue"
                onPress = {() => this.props.navigation.navigate('MedInfo', {form: 'medInfo'})}
            />
            </View>
        );
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
    container: {
        padding: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    inside: {
        padding: 50,
    },
})