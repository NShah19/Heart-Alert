import React, { Component } from 'react';
import { Button, View, StyleSheet, Text, TouchableHighlight, TextInput } from 'react-native';
import { NavigationActions } from 'react-navigation'

export default class MedInfo extends Component {

    buttonPress = () => {
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