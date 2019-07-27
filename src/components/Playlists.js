import React, { Component } from 'react';
import NavigationPage from './common/NavigationPage';
import CardSection from './common/CardSection';
import MyButton from './common/MyButton';

class Playlists extends Component {
    static navigationOptions = {
        title: 'Playlists Page'
    };

    render() {
        return (
            <NavigationPage>
                <CardSection>
                    <MyButton buttonText="Favourites" />
                </CardSection>

                <CardSection>
                    <MyButton buttonText="Important Videos" />
                </CardSection>

                <CardSection>
                    <MyButton buttonText="React Native Help Videos" />
                </CardSection>
            </NavigationPage>
        );
    };
}

export default Playlists;