import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AppText extends Component {
    render() {
        return(
            <Text style={styles.textStyle}>
                {this.props.children}
            </Text>
        );
    };
}

const styles = {
    textStyle: {
        fontFamily: 'UniversLTStd',
        fontSize: 15
    }
}

export default AppText;