import React, { Component } from 'react';
import { Button, View, StyleSheet, Text, TouchableHighlight, TextInput } from 'react-native';

export default class User extends Component {
    constructor(){
        super();
        
        this.state = {
            name: null,
            number: null,
            email: null
        }
    }

    async setUpUser(){
        try {
            var response = await fetch('localhost:5000/user', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    },
                body: JSON.stringify({
                    user:{
                        name: this.state.name,
                        number: this.state.number,
                        email: this.state.email
                    }
                })
            }
            )
        }
        catch(error){
            alert(error);
        }
    }

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
                    onChangeText = {(text)=> this.setState({name: text})}
                >
                </TextInput>
                <TextInput
                    style={styles.input}
                    placeholder="Primary Phone Number"
                    onChangeText = {(text)=> this.setState({number: text})}
                >
                </TextInput>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText = {(text)=> this.setState({email: text})}
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