import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '../../../node_modules/react-native-vector-icons/FontAwesome';

import MyButton from './MyButton';

//props: icon, title, subtitle, onPress

class ListItem extends Component {    
    render() {
        const { containerStyle, textStyle, iconStyle, titleStyle, subtitleStyle, buttonStyle } = styles;

        return(
            <View style={containerStyle}>
                <View style={iconStyle}>
                    {this.props.icon}
                </View>

                <View style={textStyle}>
                    <Text style={titleStyle}>
                        {this.props.title}
                    </Text>
                    <Text style={subtitleStyle}>
                        {this.props.subtitle}
                    </Text>
                </View>

                <View style={buttonStyle}>
                    {/* <MyButton 
                        buttonText="GO"
                        onPress={this.props.onPress}
                        color="#6bb2ff"
                    /> */}
                    <TouchableOpacity onPress={this.props.onPress}>
                        <Icon name="chevron-circle-right" color='#6bb2ff' size={35} />
                    </TouchableOpacity>
                </View>
                
                {this.props.children}
            </View>
        );
    };
}

const styles = {
    containerStyle: {
        flexDirection: 'row',
        // justifyContent: 'space-around',
        alignItems: 'center',

        marginBottom: 20,
        marginLeft: 30,
        marginRight: 30,
        paddingTop: 14,
        paddingBottom: 14,

        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#ddd',
        borderBottomWidth: 0,

        shadowColor: '#000',
		shadowOffset: { width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 2
    },
    iconStyle: {
        paddingLeft: 28,
        flex: 1,
        alignSelf: 'center',
        elevation: 3
    },
    textStyle: {
        flex: 3
    },
    titleStyle: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 17,
        color: '#2c6fb8',
        textTransform: 'uppercase'
    },
    subtitleStyle: {
        fontFamily: 'UniversLTStd',
        fontSize: 14,
        color: '#9e9e9e',
    },
    buttonStyle: {
        flex: 1,
        marginLeft: 25
    }
}

export default ListItem;