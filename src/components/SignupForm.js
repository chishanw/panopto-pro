import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';

import Card from './common/Card.js';
import CardSection from './common/CardSection.js';
import Input from './common/Input.js';
import MyButton from './common/MyButton.js';
import Spinner from './common/Spinner';

class SignupForm extends Component {
    state = { 
        email: '', 
        password: '', 
        retypePassword: '',
        hasError: false,
        displayMessage: '', 
        loading: false 
    };

    static navigationOptions = {
        tabBarLabel: 
            <Text style={{paddingBottom: 14, alignSelf: 'center', letterSpacing: 2,
                textAlign: 'center', fontSize: 16, textTransform: 'uppercase',
                fontFamily:'Quicksand-Bold', color: '#007aff'}}>
                Sign Up
            </Text>
    };

    onButtonPress() {
        const { email, password, retypePassword } = this.state;

        this.setState({displayMessage: '', loading: true});

        if (password.length >= 6) {
            if (password == retypePassword) {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onSignupSuccess.bind(this))
                // .catch(this.onSignupFail.bind(this));
            } else {
                this.onPasswordMatchFail();
            }
        } else {
            this.onPasswordLengthFail();
        }
    }

    onSignupSuccess() {        
        this.setState({
            email: '',
            password: '',
            retypePassword: '',
            hasError: false,
            displayMessage: 'Created an account.',
            loading: false
        });
    }

    onSignupFail() {
        this.setState({
            email: '',
            password: '',
            retypePassword: '',
            hasError: true,
            displayMessage: 'Authentication failed.',
            loading: false
        });
    }

    onPasswordMatchFail() {
        this.setState({
            email: '',
            password: '',
            retypePassword: '',
            hasError: true,
            displayMessage: 'Passwords must match.',
            loading: false
        })
    }

    onPasswordLengthFail() {
        this.setState({
            email: '',
            password: '',
            retypePassword: '',
            hasError: true,
            displayMessage: 'Passwords must be at least 6 characters.',
            loading: false
        })
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />
        }

        return (
            <MyButton buttonText="Submit"
            onPress={this.onButtonPress.bind(this)}/>
        );
    }

    render() {
        const { titleStyle } = styles;

        return (
            <View style={{flex: 1, alignSelf: 'stretch'}}>
                <Text style={titleStyle}>Panopto Pro</Text>
                <Card titleAvailable={true} cardTitle="Sign Up" cardSubtitle="Register now to enhance your online learning experience!">
                    <CardSection>
                        <Input 
                            icon={<Icon name="envelope" color="#2c6fb8" size={16}/>}
                            label="Email"
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            placeholder="user@gmail.com"
                        />
                    </CardSection>

                    <CardSection>
                        <Input 
                            icon={<Icon name="key" color="#2c6fb8" size={16}/>}
                            label="Password"
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            placeholder="password"
                            secureTextEntry
                        />
                    </CardSection>

                    <CardSection>
                        <Input 
                            icon={<Icon name="key" color="#2c6fb8" size={16}/>}
                            label="Confirm Password"
                            value={this.state.retypePassword}
                            onChangeText={retypePassword => this.setState({ retypePassword })}
                            placeholder="password"
                            secureTextEntry
                        />
                    </CardSection>

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>

                <Text 
                    style={{
                        fontFamily: 'Quicksand-Bold',
                        color: this.state.hasError ? 'red' : 'green', 
                        textAlign: 'center', 
                        paddingTop: 5
                    }}>
                    {this.state.displayMessage}
                </Text>
            </View>
        );
    };
}

const styles = {
    titleStyle: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 30,
        color: '#2c6fb8',
        textAlign: 'center',
        marginTop: 25,
        paddingBottom: 20
    }
}

export default SignupForm;