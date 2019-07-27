import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//Props:
//buttonText: text on the button
//onPress: function that is called when the button is pressed

const MyButton = ({ buttonText, onPress }) => {
    const { buttonStyle, textStyle } = styles;

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
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#3586de',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#3586de",
        marginLeft: 110,
        marginRight: 110,
        paddingTop: 3,
        paddingBottom: 3,
    },
    textStyle: {
        fontFamily: 'UniversLTStd-Bold',
        fontSize: 15,
        color: '#fff',
        alignSelf: 'center',
        paddingTop: 4,
        paddingBottom: 4
    }
}

export default MyButton;