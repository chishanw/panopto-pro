import { AppRegistry, View, Text } from 'react-native';
import React from 'react';
import Header from './src/components/common/Header.js';
import LoginForm from './src/components/LoginForm.js';

const App = () => {
    return (
        <View>
            <Header headerText={'Sign In'}/>
            <LoginForm />
        </View>
    );
};

AppRegistry.registerComponent('PanoptoPro', () => App);
