import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';
import { TouchableHighlight } from 'react-native-gesture-handler';

class CardList extends Component {
    render() {
        return (
            <Card titleAvailable={false} cardTitle="" cardSubtitle="">
                <CardSection>
                    <TouchableHighlight onPress={this.props.onPress} style={{width: '100%'}}>
                        <Image style={styles.imageStyle} source={{uri: this.props.imageSource}} />
                    </TouchableHighlight>
                </CardSection>

                <CardSection>
                    <Text style={styles.titleStyle}>{this.props.videoTitle}</Text>
                </CardSection>
            </Card>
        );
    };
}

const styles = {
    titleStyle: {
        textAlign: 'left',
        fontSize: 16,
        textTransform: 'uppercase',
        letterSpacing: 2,
        paddingLeft: 4,
        paddingTop: 4,
        paddingBottom: 4
    },
    imageStyle: {
        flex: 1,
        height: undefined,
        width: '100%',
        aspectRatio: 1.5,
        resizeMode: 'cover'
    }
}

export default CardList;