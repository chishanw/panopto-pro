import React, { Component } from 'react';
import NavigationPage from './common/NavigationPage';
import CardSection from './common/CardSection';
import Button from './common/Button';

class Playlists extends Component {
    static navigationOptions = {
        title: 'Playlists Page'
    };

    render() {
        return (
            <NavigationPage>
                <CardSection>
                    <Button buttonText="Favourites" />
                </CardSection>

                <CardSection>
                    <Button buttonText="Important Videos" />
                </CardSection>

                <CardSection>
                    <Button buttonText="React Native Help Videos" />
                </CardSection>
            </NavigationPage>
        );
    };
}

export default Playlists;