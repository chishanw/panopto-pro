import React from 'react';
import {TextInput, View, Text } from 'react-native';
import AppText from './AppText';

const Input = ({ icon, label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle, textStyle } = styles;
    return (
        <View style={containerStyle}>
            <View style={labelStyle}>
                {icon}
                <Text style={textStyle}>
                    <AppText>{label}</AppText>
                </Text>
            </View>
            <TextInput 
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                placeholder={placeholder}
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        fontFamily: 'UniversLTStd',
        fontSize: 15,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 16,
        flex: 2,
        borderColor: '#000',
        borderBottomWidth: 1
    },
    labelStyle: {
        paddingLeft: 20,
        flex: 1,
        flexDirection: 'row',
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
        paddingLeft: 10
    }
};

export default Input;