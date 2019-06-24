import React, { Component } from 'react';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';

class HomePage extends Component {
    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Button buttonText="Modules" />
                </CardSection>

                <CardSection>
                    <Button buttonText="Playlists" />
                </CardSection>

                <CardSection>
                    <Button buttonText="Unfinished" 
                    onPress={() => this.props.navigation.navigate('Video')}/>
                </CardSection>
            </Card>
        );
    };
}

export default HomePage;