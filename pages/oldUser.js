<<<<<<< HEAD
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
=======
import React, { Component } from 'react';
import { Button, View, StyleSheet, Text, TouchableHighlight, TextInput } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import BleManager from 'react-native-ble-manager';


export default class OldUser extends Component {
    constructor(){
        super()

        this.state = {
            name: null,
            scanned: false
        }
    }

    //2EEF3475-D26D-290F-F5B6-4EB2EBE8D47E
    startScan(){
        /*BleManager.retrieveServices('2EEF3475-D26D-290F-F5B6-4EB2EBE8D47E').then((info) => {
            service = '180D'
            characteristic = '2A37'
        })*/
        if(!this.state.scanned){
            BleManager.scan(['180D'], 100000, true).then((results)=>{
                this.setState({scanned:true})
                if(this.state.scanned){
                    //alert('Scan started')
                    BleManager.connect('2EEF3475-D26D-290F-F5B6-4EB2EBE8D47E').then(() => {
                        //alert('Connected!')
                    })
                    .catch((error) => {
                        //alert(error)
                    })
                }
            })
        }
    }

    //think of using the "startNotification" method
    componentDidMount(){
        BleManager.start({showAlert: false});
        this.startScan();
        //you might have to scan before you connect to peripheral
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
>>>>>>> d4f86eb1165dfb189bba1d487104f7ef56374d5a
})