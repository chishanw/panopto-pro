import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CardList from './common/CardList';
import Spinner from './common/Spinner';
import firebase from 'firebase';
import 'firebase/firestore';

class ModuleVideoList extends Component {
    _isMounted = false;
    firestoreRef = firebase.firestore().collection('video-links');
    storageRef = firebase.storage().ref('videos');

    static navigationOptions = {
        title: 'Module Videos'
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

        // const firestoreRef = firebase.firestore().collection('video-links');
        // const storageRef = firebase.storage().ref('videos');
        var tempNames = [];
        var tempUrls = [];

        this.firestoreRef
        .where('module_code', '==', this.props.navigation.getParam('moduleCode', 'Not Available'))
        .get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                tempNames.push({
                    file_name: doc.id,
                    video_name: doc.data().video_name
                });
            }.bind(this));

            if (this._isMounted) {
                this.setState( { videoNames: tempNames } );
            }

            this.state.videoNames.forEach((fileObj) => {
                const fileName = fileObj.file_name;
                const videoName = fileObj.video_name

                this.storageRef.child(fileName).getDownloadURL().then((url) => {
                    tempUrls.push({
                        file_url: url,
                        video_name: videoName
                    });

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
        if (this.state.loading) {
            return <Spinner size="large" />
        } else {
            return (
                // <Text>{JSON.stringify(this.state.videoNames[0])}</Text>
                <ScrollView>
                    {this.state.videoUrls.map(eachVideo => {
                        const fileName = eachVideo.file_name;
                        const videoName = eachVideo.video_name;

                        return <CardList onPress={() => this.props.navigation.navigate('Video', { videoSource: fileName})}
                            key={fileName}
                            videoTitle={videoName}
                            imageSource='https://3.img-dpreview.com/files/p/E~TS590x0~articles/8692662059/8283897908.jpeg'/>
                        }
                    )}
                </ScrollView>
            );
        }
    };
}

export default ModuleVideoList;