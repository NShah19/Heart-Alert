import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../pages/home';
import Patient from '../pages/patient'
import User from '../pages/user'
import MedInfo from '../pages/medInfo'
import Doctor from '../pages/doctor'
import OldUser from '../pages/oldUser'

export default Display = StackNavigator({
    Home: {
        screen: Home,
    },
    User: {
        screen: User,
    },
    Doctor: {
        screen: Doctor,
    },
    Patient: {
        screen: Patient,
    },
    MedInfo: {
        screen: MedInfo,
    },  
    OldUser: {
        screen: OldUser,
    }
    },
{
    headermode: 'none',
});