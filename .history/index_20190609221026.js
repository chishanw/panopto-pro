import { AppRegistry, View, Text } from 'react-native';
import React from 'react';
import Header from './src/components/header.js';
import Card from './src/components/card.js';

const App = () => {
    return (
        <View>
            <Text>hello</Text>
        </View>
    );
};

AppRegistry.registerComponent('PanoptoPro', () => App);
