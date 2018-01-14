import React, { Component } from 'react';
import { Button, View, StyleSheet, Text, TouchableHighlight, TextInput } from 'react-native';

export default class OldUser extends Component {
    constructor(){
        super()

        this.state = {
            name: null
        }
    }

    async sendName(){
        try {
            var response = await fetch('http://127.0.0.1:5000/name', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    },
                body: JSON.stringify({
                        name: this.state.name,
                })
            }
            )
        }
        catch(error){
            alert(error);
        }
    }

    changeText(text){
        this.setState({name: text})
        this.sendName()
    }
    render(){
        return(
            <View style = {styles.container}>
            <Text style={{fontSize: 20}}>
                Enter your name (enter space after)
            </Text>
            <View style = {styles.inside}>
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                onChangeText = {(text) => this.changeText(text)}
            >
            </TextInput>
            </View>
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
        width: 300,
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