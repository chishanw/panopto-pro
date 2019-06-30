import React, { Component } from 'react';
import Card from './common/Card';
import NavigationPage from './common/NavigationPage';
import CardSection from './common/CardSection';
import Button from './common/Button';

class HomePage extends Component {
    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return (
            <NavigationPage>
                <CardSection>
                    <Button buttonText="Modules" />
                </CardSection>

                <CardSection>
                    <Button buttonText="Playlists" />
                </CardSection>

                <CardSection>
                    <Button buttonText="Continue Watching" 
                    onPress={() => this.props.navigation.navigate('VideoList')}/>
                </CardSection>

                <CardSection>
                    <Button buttonText="Share Videos"
                    onPress={() => this.props.navigation.navigate('Upload')} />
                </CardSection>
            </NavigationPage>
        );
    };
}

export default HomePage;