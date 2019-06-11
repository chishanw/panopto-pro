import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import Card from './common/Card.js';
import CardSection from './common/CardSection.js';
import Input from './common/Input.js';

class LoginForm extends Component {
    state = { email: '', password: '' };

    render() {
        return (
            <View>
                <Card cardTitle="LumiNUS Login">
                    <CardSection>
                        <Input 
                            label="Email"
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            placeholder="user@u.nus.edu"
                        />
                    </CardSection>

                    <CardSection>
                        <Input 
                            label="Password"
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            placeholder="password"
                            secureTextEntry
                        />
                    </CardSection>
                </Card>
            </View>
        );
    };
}

export default LoginForm;