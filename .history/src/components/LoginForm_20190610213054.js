import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import Card from './common/Card.js';
import CardSection from './common/CardSection.js';

class LoginForm extends Component {
    render() {
        return (
            <View>
                <Card cardTitle="login">
                    <CardSection sectionTitle="email">
                        <TextInput />
                    </CardSection>
                    <CardSection sectionTitle="password"/>
                </Card>
            </View>
        );
    };
}

export default LoginForm;