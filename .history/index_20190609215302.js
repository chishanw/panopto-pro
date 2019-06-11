import { AppRegistry, Text } from 'react-native';
import React from 'react';
import Header from './src/components/header.js';

const App = () =>
    <Header headerText={'Sign In'}/>;

AppRegistry.registerComponent('PanoptoPro', () => App);
