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
                <Text style={{fontSize: 20}}>
                    First Time User?
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
            </View>
            <View style = {styles.display}>
                <Text style={{fontSize: 20}}>
                    If Not,
                </Text>
            </View>
            <View style = {styles.display}>
            <TouchableHighlight
                    style={styles.button}
                    onPress = {() => this.props.navigation.navigate('OldUser', {form: 'oldUser'})}
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
        paddingLeft: 40
    },
    textDisplay: {
        padding: 90,
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: 109
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
})