import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../pages/home';
import Patient from '../pages/patient'
import User from '../pages/user'
import MedInfo from '../pages/medInfo'

export default Display = StackNavigator({
    Home: {
        screen: Home,
    },
    User: {
        screen: User,
    },
    Patient: {
        screen: Patient,
    },
    MedInfo: {
        screen: MedInfo,
    }
    },
{
    headermode: 'none',
});