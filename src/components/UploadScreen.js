import React, { Component } from 'react';
import Card from './common/Card';
import CardSection from './common/CardSection';
import MyButton from './common/MyButton';
import firebase from 'firebase';

class UploadScreen extends Component {    
    static navigationOptions = {
        title: 'Share Videos'
    };

    // writeVideoData(module, url) {
    //     var moduleList = firebase.database().ref('modules/' + module);
    //     var newVideo = moduleList.push();
    //     newVideo.set({
    //         url: url
    //     });
    // }

    render() {
        return (
            <Card titleAvailable={true} 
            cardTitle="Upload web lectures!" 
            cardSubtitle="Share your educational resources here with a press of a button.">
                <CardSection>
                <MyButton buttonText="Upload"
                onPress={() => this.props.navigation.navigate('Gallery')}
                />
                </CardSection>
            </Card>
        );
    };
}

export default UploadScreen;