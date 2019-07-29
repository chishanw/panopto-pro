import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import MyButton from './common/MyButton';
import Header from './common/Header';
import firebase from 'firebase';

class UploadScreen extends Component {    
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View>
                <Header
                    subtitle="upload videos"
                    leftIcon="arrow-circle-left"
                    onLeftPress={() => this.props.navigation.navigate('Home')} 
                />
                <Card titleAvailable={true} 
                    cardTitle="Share educational videos!" 
                    cardSubtitle="Visit our website to upload your webcasts today!">
                <CardSection>
                    <Text style={{fontSize: 16, color: '#2c6fb8'}}>
                        bit.ly/PanoptoPro
                    </Text>
                </CardSection>
            </Card>
            </View>
        );
    };
}

export default UploadScreen;