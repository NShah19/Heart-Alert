import React, { Component } from 'react';
import { Button, View, StyleSheet, Text, TouchableHighlight } from 'react-native';

export default class Home extends Component {
    render(){
        return(
            <View style={styles.textDisplay}>
                <Text style={{fontSize: 30}}>
                    Who are you?
                </Text>
            <View style={styles.display}>
                <TouchableHighlight
                    style={styles.button}
                    onPress = {() => this.props.navigation.navigate('User', {form: 'user'})}
                >
                    <Text> Patient </Text>
                </TouchableHighlight>
                <Text>
                     
                </Text>
                <TouchableHighlight
                    style={styles.button}
                >
                    <Text> Doctor </Text>
                </TouchableHighlight>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    display: {
        padding: 60,
        justifyContent: 'center',
        flexDirection: 'row',
        paddingLeft: 53
    },
    textDisplay: {
        padding: 100,
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: 93
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
})