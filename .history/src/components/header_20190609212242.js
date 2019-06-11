import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
    const { textStyle } = styles;

    return <Text style = {textStyle}>Header</Text>;
};

const styles = {
    textStyle: {
        fontFamily: 'san-serif',
        fontSize: 20,
        textAlign: 'center'
    }
}

export default Header;