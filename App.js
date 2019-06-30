import React from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import LoginForm from './src/components/LoginForm';
import SignupForm from './src/components/SignupForm';
import HomePage from './src/components/HomePage';
import VideoScreen from './src/components/VideoScreen';
import VideoList from './src/components/VideoList';
import firebase from 'firebase';
import UploadScreen from './src/components/UploadScreen';

//onPress={() => this.props.navigation.navigate('Details')}

const AppStackNavigator = createStackNavigator(
  {
    loginFlow: { 
      screen: createBottomTabNavigator({
        Login: LoginForm,
        Signup: SignupForm
      })
    },
    mainFlow: {
      screen: createStackNavigator({
        Home: HomePage,
        Upload: UploadScreen,
        VideoList: VideoList,
        Video: VideoScreen
      })
    }
  }, 
  
  { defaultNavigationOptions: { header: null } }
);

const AppContainer = createAppContainer(AppStackNavigator);

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyAMehQZgaPdND4kAIu3Jq1smr93V-kQg7Y",
        authDomain: "panoptopro.firebaseapp.com",
        databaseURL: "https://panoptopro.firebaseio.com",
        projectId: "panoptopro",
        storageBucket: "panoptopro.appspot.com",
        messagingSenderId: "67594645973",
        appId: "1:67594645973:web:82d281f0a223908c"
    }); 
  }

  render() {
    return <View style={{flex: 1}}><AppContainer /></View>;
  }
}