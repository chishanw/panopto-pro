import React, { Component } from 'react';
import Card from './common/Card.js';
import CardSection from './common/CardSection.js';

class LoginForm extends Component {
    render() {
        return (
            <Card cardTitle="login">
                <CardSection sectionTitle="email"/>
                <CardSection sectionTitle="password"/>
            </Card>
        );
    };
}

export default LoginForm;