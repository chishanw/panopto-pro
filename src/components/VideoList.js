import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CardList from './common/CardList';
import Spinner from './common/Spinner';
import firebase from 'firebase';
import { Thumbnail } from 'react-native-thumbnail-video';

class VideoList extends Component {
    _isMounted = false;

    static navigationOptions = {
        title: 'Continue Watching'
    };

    constructor(){
        super();
        
        this.state = {
            videoNames: [],
            videoUrls: [],
            loading: true
        };
    };

    componentWillMount() {
        this._isMounted = true; 

        const firestoreRef = firebase.firestore().collection('video-links');
        const storageRef = firebase.storage().ref('videos');
        var tempNames = [];
        var tempUrls = [];

        firestoreRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                const filename = doc.id;
                tempNames.push(filename);
            }.bind(this));

            if (this._isMounted) {
                this.setState( { videoNames: tempNames } );
            }

            this.state.videoNames.forEach((filename) => {
                storageRef.child(filename).getDownloadURL().then((url) => {
                    tempUrls.push(url);

                    this.setState( { loading: false } );

                    if (this._isMounted) {
                        this.setState( { videoUrls: tempUrls } );
                    }
                });
            });
        }.bind(this));
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        var videoIdx = 0;

        if (this.state.loading) {
            return <Spinner size="large" />
        } else {
            return (
                <ScrollView>
                    {this.state.videoUrls.map(eachVideo => {
                        videoIdx++;
                        const idx = videoIdx.toString();

                        return <CardList onPress={() => this.props.navigation.navigate('Video', { videoSource: eachVideo})}
                            videoTitle={'Lecture ' + idx}
                            imageSource={<Thumbnail url={eachVideo}/>}
                            // imageSource='https://3.img-dpreview.com/files/p/E~TS590x0~articles/8692662059/8283897908.jpeg'
                            key={eachVideo}
                            />}
                    )}
                </ScrollView>
            );
        }
    };
}

export default VideoList;