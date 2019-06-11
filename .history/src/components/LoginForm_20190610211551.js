import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import Card from './common/Card.js';
import CardSection from './common/CardSection.js';

class LoginForm extends Component {
    render() {
        return (
            <Card cardTitle="login">
                <CardSection sectionTitle="email">
                    <Text> testing</Text>
                </CardSection>
                <CardSection sectionTitle="password" />
            </Card>
        );
    };
}

export default LoginForm;