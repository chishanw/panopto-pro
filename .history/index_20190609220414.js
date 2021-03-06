import { AppRegistry, View } from 'react-native';
import React from 'react';
import Header from './src/components/header.js';
import Card from './src/components/card.js';

const App = () => {
    return (
        <View>
        <Header headerText={'Sign In'}/>;
        <Card />
        </View>
    );
};

AppRegistry.registerComponent('PanoptoPro', () => App);
