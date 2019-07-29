import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//Props:
//buttonText: text on the button
//onPress: function that is called when the button is pressed

var buttonColor = '#6bb2ff';

const MyButton = ({ buttonText, onPress, color }) => {
    const { buttonStyle, textStyle } = styles;

    buttonColor = {color};

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{buttonText}</Text>
        </TouchableOpacity>
    );
};

//007aff

const styles = {
    buttonStyle: {
        height: 30,
        // flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: buttonColor,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: buttonColor,
        // marginLeft: 110,
        // marginRight: 110,
        paddingTop: 3,
        paddingBottom: 3,

        shadowColor: '#000',
		// shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 3
    },
    textStyle: {
        fontFamily: 'UniversLTStd-Bold',
        fontSize: 15,
        color: '#fff',
        alignSelf: 'center',
        paddingTop: 4,
        paddingBottom: 4,
        paddingRight: 24,
        paddingLeft: 24
    }
}

export default MyButton;