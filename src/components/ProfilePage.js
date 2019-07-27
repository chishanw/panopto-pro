import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { StackActions, NavigationActions } from 'react-navigation';
import SectionHeader from './common/SectionHeader';
import SectionButton from './common/SectionButton';
import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';
import Spinner from './common/Spinner';

class ProfilePage extends Component {
    static navigationOptions = {
        title: 'Profile'
    }

    state = {
        name: "",
        email: "",
        uid: "",
        emailVerified: false,
        loggedIn: true,
        displayMessage: ''
    }

    componentWillMount() {
        var user = firebase.auth().currentUser;

        if (user != null) {
            this.setState({
                name: user.displayName,
                email: user.email,
                uid: user.uid,
                emailVerified: user.emailVerified
            });
        } else {
            this.setState({ loggedIn: false });
        }
    }

    signOut() {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            const resetAction = StackActions.reset({
                index: 0, // <-- currect active route from actions array
                actions: [
                  NavigationActions.navigate({ routeName: 'loginFlow' }),
                ],
              });
              
              this.props.navigation.dispatch(resetAction);
        }.bind(this)).catch(function(error) {
            // An error happened.
            this.setState({
                displayMessage: 'Sign out unsuccessful. Try again!'
            })
        }.bind(this));
    }

    render() {
        const { containerStyle, cardStyle, textStyle, iconStyle } = styles;

        return (
            <View>
            <View style={containerStyle}>
                <View style={cardStyle}>
                    <View style={{ paddingTop: 60, paddingBottom: 15 }}>
                        <SectionHeader headerText="Email" />
                        <Text style={textStyle}>{this.state.email}</Text>

                        <SectionButton 
                            headerText="Change Password"
                            onPress={() => this.props.navigation.navigate('ChangePassword')} 
                        />

                        <SectionButton 
                            headerText="Sign Out"
                            onPress={() => this.signOut()}
                        />
                    </View>

                    <View style={iconStyle}>
                        <Icon name="user-circle" color="#424242" size={70}/>
                    </View>
                </View>
                <Text style={{color:'red', textAlign:'center'}}>{this.state.displayMessage}</Text> 
            </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        paddingTop: 36
    },
    cardStyle: {
        zIndex: 1,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
		shadowOffset: { width: 0, height: 3},
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 1,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 20,
        marginBottom: 15,
    },
    textStyle: {
        fontFamily: 'UniversLTStd-Bold',
        fontSize: 15,
        textAlign: 'center',
        paddingBottom: 20
    },
    iconStyle: {
        position: 'absolute',
        zIndex: 5,
        height: 80,
        width: 80,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(250, 250, 250, 0.7)',
        borderRadius: 50,
        marginTop: -40,
        paddingRight: 3,
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowOffset: {
            width: 2,
            height: 2,
        }
    }
}

export default ProfilePage;