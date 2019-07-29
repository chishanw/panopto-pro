import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    const { containerStyle } = styles;

    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',

        // shadowColor: '#000',
		// // shadowOffset: { width: 0, height: 2},
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // // elevation: 1,
    }
};

export default CardSection;