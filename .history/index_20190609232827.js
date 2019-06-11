import { AppRegistry, View, Text } from 'react-native';
import React from 'react';
import Header from './src/components/common/Header.js';
import Card from './src/components/common/Card.js';

const App = () => {
    return (
        <View>
            <Header headerText={'Sign In'}/>
            <Card cardTitle={'Email'}/>
        </View>
    );
};

AppRegistry.registerComponent('PanoptoPro', () => App);
