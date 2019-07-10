import React, { Component } from 'react';
import Card from './Card';

class NavigationPage extends Component {
    // static navigationOptions = {
    //     title: 'Navigate'
    // };

    render() {
        return (
            <Card titleAvailable={false} cardTitle="" cardSubtitle="">
                {this.props.children}
            </Card>
        );
    };
}

export default NavigationPage;