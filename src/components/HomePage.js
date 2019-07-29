import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';

// import NavigationPage from './common/NavigationPage';
// import CardSection from './common/CardSection';
import MyButton from './common/MyButton';
import ListItem from './common/ListItem';

class HomePage extends Component {
    darkBlue = '#2c6fb8';
    lightBlue = '#6bb2ff';
    brightBlue = '#007aff';
    grey = '#ddd';

    titleColor = this.darkBlue;
    iconColor = this.darkBlue;

    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        }
    };

    render() {
        const { headerStyle, subheaderStyle, titleStyle, subtitleStyle, profileIconStyle, iconStyle } = styles;
        var userId = firebase.auth().currentUser.uid;

        return (
            <View>
                <View style={headerStyle}>
                    <LinearGradient colors={[this.darkBlue, this.lightBlue]}>
                        <View>
                            <Text style={titleStyle}>
                                Panopto Pro
                            </Text>
                            <Text style={subtitleStyle}>
                                Home Page
                            </Text>
                        </View>
                        <TouchableOpacity 
                            style={profileIconStyle}
                            onPress={() => this.props.navigation.navigate('Profile')}>
                            <Icon name="user-circle" color="#fff" size={35}/>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

                <Text style={subheaderStyle}>What would you like to do today?</Text>

                <View>
                    <ListItem
                        icon={<Icon name="book" color={this.iconColor} size={30}/>}
                        title="Modules"
                        subtitle="Search videos by modules"
                        onPress={() => this.props.navigation.navigate('ModulesPage')}>
                        {/* <MyButton buttonText="Modules" 
                        onPress={() => this.props.navigation.navigate('ModulesPage')}/> */}
                    </ListItem>

                    <ListItem
                        icon={<Icon name="list" color={this.iconColor} size={30}/>}
                        title="Playlists"
                        subtitle="Sort your videos here"
                        onPress={() => this.props.navigation.navigate('PlaylistsPage', {userId: userId})}>
                    </ListItem>

                    <ListItem
                        icon={<Icon name="bookmark" color={this.iconColor} size={30}/>}
                        title="Continue"
                        subtitle="Resume where you left off"
                        onPress={() => this.props.navigation.navigate('VideoList')}>
                    </ListItem>

                    <ListItem
                        icon={<Icon name="share-alt" color={this.iconColor} size={30}/>}
                        title="Share Videos"
                        subtitle="Spread the joy of learning"
                        onPress={() => this.props.navigation.navigate('Upload')}>
                    </ListItem>
                </View>
            </View>
        );
    };
}

const styles = {
    headerStyle: {
        paddingBottom: 20
    },
    subheaderStyle: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 16,
        color: '#2c6fb8',
        textAlign: 'center',
        paddingBottom: 30
    },
    titleStyle: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        marginTop: 40
    },
    subtitleStyle: {
        fontFamily: 'Quicksand-Regular',
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 2,
        paddingBottom: 35
    },
    iconStyle: {
        paddingRight: 8
    },
    profileIconStyle: {
        position: 'absolute',
        height: 45,
        width: 45,
        right: 6,
        top: 45,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'rgba(250, 250, 250, 0.7)',
        borderRadius: 50,
        margin: 5,
        paddingRight: 3,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 2,
            height: 2,
        }
    }
}

export default HomePage;