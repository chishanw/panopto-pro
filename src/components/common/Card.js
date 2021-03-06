import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Card extends Component {
    renderTitle() {
        const available = this.props.titleAvailable;
        if (available) {
            return (
                <View>
                    <Text style={styles.titleStyle}>{this.props.cardTitle}</Text>
                    <Text style={styles.subtitleStyle}>{this.props.cardSubtitle}</Text>
                </View>
            );
        }
    }
    render() {
        return (
            <View style={styles.containerStyle}>
                {this.renderTitle()}
                {this.props.children}
            </View>
        );
    };
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
		// shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 3
    },
    titleStyle: {
        fontFamily:'Quicksand-Bold',
        fontSize: 18,
        paddingLeft: 15,
        paddingTop: 7,
        textAlign: 'center'
    },
    subtitleStyle: {
        fontSize: 14,
        fontFamily:'Quicksand-Regular',
        textAlign: 'center',
        paddingTop: 4,
        paddingBottom: 7,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    }
};

export default Card;