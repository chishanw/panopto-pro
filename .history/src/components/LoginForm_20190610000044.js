import React, { Component } from 'react-native';
import { View } from 'react-native';
import Card from './common/Card.js';
import CardSection from './common/CardSection.js';

class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection sectionTitle={"email"}/>
                <CardSection sectionTitle={"password"}/>
            </Card>
        );
    };
}

export default LoginForm;