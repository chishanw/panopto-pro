import React from 'react';
import { Text } from 'react-native';

const Header = () => {
    const { textStyle } = styles;

    return <Text style = {textStyle}>Header</Text>;
};

const styles = {
    textStyle: {
        fontFamily: 'Helvetica',
        fontSize: 20
    }
}

export default Header;