import React, { Component } from 'react';
import { Button, View, StyleSheet, Text, TouchableHighlight, TextInput } from 'react-native';
import { NavigationActions } from 'react-navigation'

export default class MedInfo extends Component {

    constructor(){
        super();
        
        this.state = {
            age: null,
            past: null,
            family: null,
            meds: null
        }
    }

    async setUpUser(){
        try {
            var response = await fetch('http://127.0.0.1:5000/med', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    },
                body: JSON.stringify({
                        name: this.state.name,
                        number: this.state.number,
                        email: this.state.email
                })
            }
            )
        }
        catch(error){
            alert(error);
        }
    }

    buttonPress = () => {
        this.setUpUser()
        this.props.navigation.navigate('Home', {form: 'home'})
        //alert("You are now signed up for alerts!")
    }

    render(){
        return(
            <View style={styles.container}>
            <Text style={{fontSize: 30}}>
                Medical Info
            </Text>
            <View style={styles.inside}>
            <Text>
                Age
            </Text>
            <TextInput
                style={styles.input}
                onChangeText = {(text)=> this.setState({age: text})}
                placeholder="Age"
            >
            </TextInput>
            <Text>
                Suffered from heart conditions in the past? (Yes/No)
            </Text>
            <TextInput
                style={styles.input}
                onChangeText = {(text)=> this.setState({past: text})}
                placeholder="Enter Yes or No"
            >
            </TextInput>
            <Text>
                Does your family have a history of heart conditions? (Yes/No)
            </Text>
            <TextInput
                style={styles.input}
                onChangeText = {(text)=> this.setState({family: text})}
                placeholder="Enter Yes or No"
            >
            </TextInput>
            <Text>
                List Medications
            </Text>
            <TextInput
                style={styles.input}
                onChangeText = {(text)=> this.setState({meds: text})}
                placeholder="List Medications separated by commas"
            >
            </TextInput>
            <Button
                title = "Submit"
                onPress = {this.buttonPress}
            />
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        marginTop: 10,
        padding: 10,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48bbec',
        paddingBottom: 20,
        width: 300
    },
    container: {
        padding: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    inside: {
        padding: 30,
    },
})