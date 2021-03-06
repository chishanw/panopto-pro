import { AppRegistry, View, Text } from 'react-native';
import React from 'react';
import Header from './src/components/Header.js';
import Card from './src/components/Card.js';

const App = () => {
    return (
        <View>
            <Header headerText={'Sign In'}/>
            <Card cardTitle={'Email'}/>
        </View>
    );
};

AppRegistry.registerComponent('PanoptoPro', () => App);
