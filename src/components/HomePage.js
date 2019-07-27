import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import NavigationPage from './common/NavigationPage';
import CardSection from './common/CardSection';
import MyButton from './common/MyButton';
import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';

class HomePage extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Home',
            headerTitleStyle: {
                justifyContent: 'center'
            },
            headerRight: (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Profile')}
                    style={{
                        height: 45,
                        width: 45,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(250, 250, 250, 0.7)',
                        borderRadius: 50,
                        margin: 5,
                        paddingRight: 3,
                        shadowColor: 'black',
                        shadowOpacity: 0.5,
                        shadowOffset: {
                            width: 2,
                            height: 2,
                        }
                    }}
                ><Icon name="user-circle" color="#000" size={35}/></TouchableOpacity>
            )
        }
    };

    render() {
        return (
            <NavigationPage>
                <CardSection>
                    <MyButton buttonText="Modules" 
                    onPress={() => this.props.navigation.navigate('ModulesPage')}/>
                </CardSection>

                <CardSection>
                    <MyButton buttonText="Playlists" 
                    onPress={() => this.props.navigation.navigate('PlaylistsPage')}/>
                </CardSection>

                <CardSection>
                    <MyButton buttonText="Continue Watching" 
                    onPress={() => this.props.navigation.navigate('VideoList')}/>
                </CardSection>

                <CardSection>
                    <MyButton buttonText="Share Videos"
                    onPress={() => this.props.navigation.navigate('Upload')} />
                </CardSection>
            </NavigationPage>
        );
    };
}

export default HomePage;