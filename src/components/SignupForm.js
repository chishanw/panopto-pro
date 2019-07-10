import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import Card from './common/Card.js';
import CardSection from './common/CardSection.js';
import Input from './common/Input.js';
import Button from './common/Button.js';
import Spinner from './common/Spinner';

//this.props.navigation.navigate('Home') 

class SignupForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    static navigationOptions = {
        tabBarLabel: 
            <Text style={{paddingBottom: 14, alignSelf: 'center', letterSpacing: 3,
                textAlign: 'center', fontSize: 16, textTransform: 'uppercase'}}>
                Sign Up
            </Text>
    };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({error: '', loading: true});

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
    }

    onLoginSuccess() {
        //firebase.auth().signInWithEmailAndPassword(email, password);
        
        this.setState({
            email: '',
            password: '',
            error: 'Created an account.',
            loading: false
        });

        //this.props.navigation.navigate('Home');
    }

    onLoginFail() {
        this.setState({
            email: '',
            password: '',
            error: 'Authentication failed.',
            loading: false
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />
        }

        return (
            <Button buttonText="Submit"
            onPress={this.onButtonPress.bind(this)}/>
        );
    }

    render() {
        return (
            <View style={{flex: 1, alignSelf: 'stretch'}}>
                <Card titleAvailable={true} cardTitle="Sign Up" cardSubtitle="Register now to enhance your online learning experience!">
                    <CardSection>
                        <Input 
                            label="Email"
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            placeholder="user@gmail.com"
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

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>

                <Text style={{color:'red', textAlign: 'center', paddingTop: 5}}>
                    {this.state.error}
                </Text>
            </View>
        );
    };
}

export default SignupForm;