import React from 'react';
import { View, Text } from 'react-native';

const CardSection = (props) => {
    const { containerStyle, titleStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={titleStyle}>{props.sectionTitle}</Text>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },
    titleStyle: {
        marginLeft: 5
    }
};

export default CardSection;