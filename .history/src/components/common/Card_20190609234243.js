import React from 'react';
import { View, Text } from 'react-native';
import CardSection from './CardSection.js';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>{props.cardTitle}</Text>
            <CardSection info={'test one'}/>
            <CardSection info={'test two!!'}/>
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
		shadowOffset: { width: 0, height: 3},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10 
    },
    titleStyle: {
        fontFamily: 'san-serif',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform:'uppercase',
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    }
};

export { Card };