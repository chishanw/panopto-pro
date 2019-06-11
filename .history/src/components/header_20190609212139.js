import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
    const { textStyle } = styles;

    return (
        <View>
            <Text style = {textStyle}>Header</Text>;
        </View>
    );
};

const styles = {
    textStyle: {
        fontFamily: 'san-serif',
        fontSize: 20,
    }
}

export default Header;