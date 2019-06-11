import React, { Component } from 'react-native';
import { View } from 'react-native';
import Card from './common/Card.js';
import CardSection from './common/CardSection.js';

class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection />
                <CardSection />
            </Card>
        );
    };
}

export default LoginForm;