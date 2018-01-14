import React, { Component } from 'react';
import { Button, View, StyleSheet, Text, TouchableHighlight, TextInput } from 'react-native';

export default class Patient extends Component {
    
    constructor(){
        super();
        
        this.state = {
            name1: null,
            number1: null,
            name2: null,
            number2: null,
            name3: null,
            number3: null
        }
    }

    async setUpUser(){
        try {
            var response = await fetch('http://127.0.0.1:5000/contact', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    },
                body: JSON.stringify({
                        name1: this.state.name1,
                        number1: this.state.number1,
                        name2: this.state.name2,
                        number2: this.state.number2,
                        name3: this.state.name3,
                        number3: this.state.number3,
                })
            }
            )
        }
        catch(error){
            alert(error);
        }
    }

    submit() {
        this.setUpUser();
        this.props.navigation.navigate('MedInfo', {form: 'medInfo'})
    }
    
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
                onChangeText = {(text)=> this.setState({name1: text})}
            >
            </TextInput>
            <TextInput
                style={styles.input}
                onChangeText = {(text)=> this.setState({number1: text})}
                placeholder="Emergency Contact Number 1"
            >
            </TextInput>
            <TextInput
                style={styles.input}
                onChangeText = {(text)=> this.setState({name2: text})}
                placeholder="Name 2"
            >
            </TextInput>
            <TextInput
                style={styles.input}
                onChangeText = {(text)=> this.setState({number2: text})}
                placeholder="Emergency Contact Number 2"
            >
            </TextInput>
            <TextInput
                style={styles.input}
                onChangeText = {(text)=> this.setState({name3: text})}
                placeholder="Name 3"
            >
            </TextInput>
            <TextInput
                style={styles.input}
                onChangeText = {(text)=> this.setState({number3: text})}
                placeholder="Emergency Contact Number 3"
            >
            </TextInput>
            </View>
            <Button
                title = "Continue"
                onPress = {() => this.submit()}
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