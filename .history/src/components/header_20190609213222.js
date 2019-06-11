import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
		<View style={viewStyle}>
			<Text style={textStyle}>Header</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F2F2F2',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3},
		shadowOpacity: 0.2
	},
    textStyle: {
        fontFamily: 'san-serif',
        fontSize: 20,
    }
}

export default Header;