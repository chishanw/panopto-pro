import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { StackActions, NavigationActions } from 'react-navigation';
import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';

import Card from './common/Card.js';
import CardSection from './common/CardSection.js';
import Input from './common/Input.js';
import MyButton from './common/MyButton.js';
import Spinner from './common/Spinner';

class LoginForm extends Component {
    state = { 
        email: '', 
        password: '', 
        hasError: false,
        displayMessage: '', 
        loading: false };

    static navigationOptions = {
        tabBarLabel: 
            <Text style={{paddingBottom: 14, alignSelf: 'center', letterSpacing: 2,
                textAlign: 'center', fontSize: 16, textTransform: 'uppercase',
                fontFamily: 'Quicksand-Bold', color: '#007aff'}}>
                Log In
            </Text>
    };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({
            displayMessage: '', 
            loading: true
        });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            hasError: false,
            displayMessage: '',
            loading: false
        });

        const resetAction = StackActions.reset({
            index: 0, // <-- currect active route from actions array
            actions: [
              NavigationActions.navigate({ routeName: 'mainFlow' }),
            ],
          });
          
        this.props.navigation.dispatch(resetAction);
    }

    onLoginFail() {
        this.setState({
            email: '',
            password: '',
            hasError: true,
            displayMessage: 'Authentication failed. Try again.',
            loading: false
        });
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
                <Card 
                    titleAvailable={true} 
                    cardTitle="Log In" 
                    cardSubtitle="Welcome back to Panopto Pro!">

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
                        {this.renderButton()}
                    </CardSection>
                </Card>

                <Text style={{
                    fontFamily: 'Quicksand-Bold',
                    color:this.state.hasError ? 'red' : 'green', 
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
        fontSize: 26,
        color: '#2c6fb8',
        textAlign: 'center',
        marginTop: 25,
        paddingBottom: 20
    }
}

export default LoginForm;