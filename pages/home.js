import React, { Component } from 'react';
import { Button, View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import BleManager from 'react-native-ble-manager';


export default class Home extends Component {
    componentDidMount(){
        BleManager.start({showAlert: false});

        //you might have to scan before you connect to peripheral
        
    }

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
                    onPress = {() => this.props.navigation.navigate('Doctor', {form: 'doctor'})}
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