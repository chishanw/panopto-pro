import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../../../node_modules/react-native-vector-icons/FontAwesome';

//props: 
// subheader="" 
// subtitle=""
// leftIcon=""
// rightIcon=""
// onLeftPress={() => } 
// onRightPress={() => }

class Header extends Component {
	render() {
        const { headerStyle, subheaderStyle, 
            titleStyle, subtitleStyle, 
            leftIconStyle, rightIconStyle } = styles;

		return (
            <View>
			<View style={headerStyle}>
				<LinearGradient colors={['#2c6fb8', '#6bb2ff']}>
					<View>
						<Text style={titleStyle}>
							Panopto Pro
						</Text>
						<Text style={subtitleStyle}>
							{this.props.subtitle}
						</Text>
					</View>

					<TouchableOpacity 
						style={leftIconStyle}
						onPress={this.props.onLeftPress}>
						<Icon name={this.props.leftIcon} color="#fff" size={35}/>
					</TouchableOpacity>

                    <TouchableOpacity 
						style={rightIconStyle}
						onPress={this.props.onRightPress}>
						<Icon name={this.props.rightIcon} color="#fff" size={35}/>
					</TouchableOpacity>
				</LinearGradient>
            </View>
            <Text style={subheaderStyle}>{this.props.subheader}</Text>
            </View>
		);
	};
}

const styles = {
	headerStyle: {
        paddingBottom: 20
    },
    subheaderStyle: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 16,
        color: '#2c6fb8',
        textAlign: 'center',
        paddingBottom: 30
    },
    titleStyle: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        marginTop: 40
    },
    subtitleStyle: {
        fontFamily: 'Quicksand-Regular',
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 2,
        paddingBottom: 35
    },
    leftIconStyle: {
        position: 'absolute',
        height: 45,
        width: 45,
        left: 6,
        top: 45,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'rgba(250, 250, 250, 0.7)',
        borderRadius: 50,
        margin: 5,
        paddingRight: 3,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 2,
            height: 2,
        }
    },
    rightIconStyle: {
        position: 'absolute',
        height: 45,
        width: 45,
        right: 6,
        top: 45,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'rgba(250, 250, 250, 0.7)',
        borderRadius: 50,
        margin: 5,
        paddingRight: 3,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 2,
            height: 2,
        }
    }
}

export default Header;