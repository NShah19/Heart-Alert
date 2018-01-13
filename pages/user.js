import React, { Component } from 'react';
import { Button, View, StyleSheet, Text, TouchableHighlight, TextInput } from 'react-native';

export default class User extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 30}}>
                    Create User Profile
                </Text>
                <View style={styles.inside}>
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                >
                </TextInput>
                <TextInput
                    style={styles.input}
                    placeholder="Primary Phone Number"
                >
                </TextInput>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                >
                </TextInput>
                <Button
                    title = "Continue"
                    onPress = {() => this.props.navigation.navigate('Patient', {form: 'patient'})}
                />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    inside: {
        padding: 50,
    },
    input: {
        height: 50,
        width: 300,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48bbec'
    },
})