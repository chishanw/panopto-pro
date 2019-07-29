import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../../../node_modules/react-native-vector-icons/FontAwesome';

//props: 
// leftIcon=""
// rightIcon=""
// onLeftPress={() => } 
// onRightPress={() => }

class ThinHeader extends Component {
	render() {
        const { headerStyle, 
            titleStyle, 
            leftIconStyle, rightIconStyle } = styles;

		return (
            <View>
			<View style={headerStyle}>
				<LinearGradient colors={['#2c6fb8', '#6bb2ff']}>
                    <Text style={titleStyle}>{this.props.title}</Text>
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
            </View>
		);
	};
}

const styles = {
	headerStyle: {
    },
    titleStyle: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        paddingBottom: 10,
        paddingTop: 10
    },
    leftIconStyle: {
        position: 'absolute',
        height: 45,
        width: 45,
        left: 6,
        top: 10,
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
        top: 10,
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

export default ThinHeader;