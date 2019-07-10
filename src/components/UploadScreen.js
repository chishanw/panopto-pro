import React, { Component } from 'react';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';
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
                <Button buttonText="Upload"
                />
                </CardSection>
            </Card>
        );
    };
}

export default UploadScreen;