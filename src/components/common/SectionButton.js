import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class SectionButton extends Component {
    render() {
        const { viewStyle, textStyle } = styles;
        return (
            <View style={viewStyle}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <Text style={textStyle}>
                        {this.props.headerText}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
}

const styles = {
    viewStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 15
    },
    textStyle: {
        fontFamily: 'Quicksand-Regular',
        fontSize: 15,
        letterSpacing: 2,
        height: 'auto',
        width: 'auto',
        justifyContent: 'center',
        textAlign: 'center',
        textTransform: 'uppercase',
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: '#3d8feb',
        borderRadius: 3,
        borderWidth: 1,
        color: '#fff',
        backgroundColor: '#3d8feb'
    }
}

export default SectionButton;