import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import MyButton from './common/MyButton';
import Spinner from './common/Spinner';
import Header from './common/Header';
import firebase from 'firebase';

class ChangePassword extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        password: '',
        retypePassword: '',
        hasError: false,
        displayMessage: '',
        loading: false
    }

    onButtonPress() {
        var user = firebase.auth().currentUser;
        const { password, retypePassword } = this.state;

        if (password.length >= 6) {
            if (password == retypePassword) {
                user.updatePassword(password).then(function() {
                    this.setState({
                        hasError: false,
                        displayMessage: 'Update successful!'
                    })
                }.bind(this)).catch(function(error) {
                    this.setState({
                        hasError: true,
                        displayMessage: 'Update unsuccessful. Try again!'
                    })
                }.bind(this));
            } else {
                this.setState({
                    hasError: true,
                    displayMessage: 'Passwords must match.'
                })
            }
        } else {
            this.setState({
                hasError: true,
                displayMessage: 'Passwords must be at least 6 characters.'
            })
        }
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
        return (
            <View style={{flex: 1, alignSelf: 'stretch'}}>
                <Header
                    subtitle="update password"
                    leftIcon="arrow-circle-left"
                    onLeftPress={() => this.props.navigation.navigate('Profile')} 
                />
                <Card 
                    titleAvailable={true} 
                    cardTitle="Change Password" 
                    cardSubtitle="Ensure that your password is at least 6 characters long!">

                    <CardSection>
                        <Input 
                            label="New Password"
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            placeholder="password"
                            secureTextEntry
                        />
                    </CardSection>

                    <CardSection>
                        <Input 
                            label="Retype Password"
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
                        color: this.state.hasError ? 'red' : 'green', 
                        textAlign: 'center', 
                        paddingTop: 5}}>
                    {this.state.displayMessage}
                </Text>
            </View>
        );
    };
}

const styles = {
    titleAvailable: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 26,
        textAlign: 'center',
        marginTop: 25,
        paddingBottom: 20
    }
}

export default ChangePassword;