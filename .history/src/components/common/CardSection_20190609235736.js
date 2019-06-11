import React from 'react';
import { View, Text } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            <Text>{props.sectionTitle}</Text>
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export default CardSection;