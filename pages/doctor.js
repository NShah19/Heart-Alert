import React, { Component } from 'react';
import { Button, View, StyleSheet, Text, TouchableHighlight, TextInput, AppState } from 'react-native';
import BleManager from 'react-native-ble-manager';
import TimerMixin from 'react-timer-mixin';

export default class Doctor extends Component {

    render(){
        return(
            <View style={styles.container}>
            <Text style={{fontSize: 13}}>
                Enter Access Code to Display Patient Info
            </Text>
            <View style={styles.inside}>
            <TextInput
                style={styles.input}
                keyboardType = 'numeric'
                placeholder="Enter Access Code"
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