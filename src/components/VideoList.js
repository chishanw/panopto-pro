import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CardList from './common/CardList';
import firebase from 'firebase';

class VideoList extends Component {
    static navigationOptions = {
        title: 'Continue Watching'
    };

    constructor(){
        super();
        
        this.state = {
            videoNames: [],
            videoUrls: []
        };
    };

    componentWillMount() {
        const firestoreRef = firebase.firestore().collection('video-links');
        const storageRef = firebase.storage().ref('videos');
        var tempNames = [];
        var tempUrls = [];

        firestoreRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                const filename = doc.id;
                tempNames.push(filename);
            }.bind(this));
            this.setState( { videoNames: tempNames } );

            this.state.videoNames.forEach((filename) => {
                storageRef.child(filename).getDownloadURL().then((url) => {
                    tempUrls.push(url);
                    this.setState( { videoUrls: tempUrls } );
                });
            });
        }.bind(this));
    }

    render() {
        var videoIdx = 0;
        
        return (
            <ScrollView>
                {this.state.videoUrls.map(eachVideo => {
                    videoIdx++;
                    const idx = videoIdx.toString();

                    return <CardList onPress={() => this.props.navigation.navigate('Video', { videoSource: eachVideo})}
                        videoTitle={'Lecture ' + idx}
                        imageSource='https://3.img-dpreview.com/files/p/E~TS590x0~articles/8692662059/8283897908.jpeg'
                        key={eachVideo}
                        />}
                )}
            </ScrollView>
        );
    };
}

export default VideoList;