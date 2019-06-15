import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

//Props:
//buttonText: text on the button
//onPress: function that is called when the button is pressed

const Button = ({ buttonText, onPress }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{buttonText}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        height: 10,
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#007aff",
        marginLeft: 100,
        marginRight: 100,
        paddingTop: 3,
        paddingBottom: 3,
    },
    textStyle: {
        color: '#007aff',
        fontSize: 14,
        fontWeight: '600',
        alignSelf: 'center',
        paddingTop: 4,
        paddingBottom: 4
    }
}

export default Button;