import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginForm from './src/components/LoginForm';
import HomePage from './src/components/HomePage';
import VideoScreen from './src/components/VideoScreen';

//onPress={() => this.props.navigation.navigate('Details')}

const AppStackNavigator = createStackNavigator(
  {
    loginFlow: { 
      screen: createStackNavigator({
        Login: LoginForm
      })
    },
    mainFlow: {
      screen: createStackNavigator({
        Home: HomePage,
        Video: VideoScreen
      })
    }
  }, 
  
  { defaultNavigationOptions: { header: null }
});

const AppContainer = createAppContainer(AppStackNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}