import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
		<View style={viewStyle}>
			<Text style = {textStyle}>Header</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8'
	},
    textStyle: {
        fontFamily: 'san-serif',
        fontSize: 20,
        textAlign: 'center'
    }
}

export default Header;