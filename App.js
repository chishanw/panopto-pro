import React from 'react';
import { View, YellowBox } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import LoginForm from './src/components/LoginForm';
import SignupForm from './src/components/SignupForm';
import HomePage from './src/components/HomePage';
import VideoScreen from './src/components/common/VideoScreen';
import VideoList from './src/components/VideoList';
import firebase from 'firebase';
import UploadScreen from './src/components/UploadScreen';
import ModulesPage from './src/components/ModulesPage';
import ModuleVideoList from './src/components/ModuleVideoList';

import _ from 'lodash';
import Playlists from './src/components/Playlists';
import ProfilePage from './src/components/ProfilePage';
import ChangePassword from './src/components/ChangePassword';

const AppStackNavigator = createStackNavigator(
  {
    loginFlow: { 
      screen: createBottomTabNavigator({
        Login: LoginForm,
        Signup: SignupForm,
      })
    },
    mainFlow: {
      screen: createStackNavigator({
        Home: HomePage,
        ModulesPage: ModulesPage,
        PlaylistsPage: Playlists,
        Upload: UploadScreen,
        VideoList: VideoList,
        Video: VideoScreen,
        Profile: ProfilePage
      })
    },
    uploadFlow: {
      screen: createStackNavigator({
        Upload: UploadScreen,
      })
    },
    modulesFlow: {
      screen: createStackNavigator({
        ModulesPage: ModulesPage,
        ModuleVideoList: ModuleVideoList,
        Video: VideoScreen
      })
    },

    playlistsFlow: {
      screen: createStackNavigator({
        PlaylistsPage: Playlists
      })
    },
    profileFlow: {
      screen: createStackNavigator({
        Home: HomePage,
        Profile: ProfilePage,
        ChangePassword: ChangePassword,
        LoginForm: LoginForm
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
    YellowBox.ignoreWarnings(['Setting a timer']);
    const _console = _.clone(console);
    console.warn = message => {
      if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
      }
    };

    return <View style={{flex: 1}}><AppContainer /></View>;
  }
}