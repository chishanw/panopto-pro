import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import Card from './common/Card.js';
import CardSection from './common/CardSection.js';
import Input from './common/Input.js';

class LoginForm extends Component {
    state = { text: '' };

    render() {
        return (
            <View>
                <Card cardTitle="login">
                    <CardSection>
                        <TextInput 
                            value={this.state.text}
                            onChangeText={text => this.setState({ text })}
                            style={{height:20, width:100, borderWidth: 1, borderColor: '#000'}}/>
                    </CardSection>
                    <CardSection />
                </Card>
            </View>
        );
    };
}

export default LoginForm;