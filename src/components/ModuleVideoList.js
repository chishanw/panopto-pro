import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Spinner from './common/Spinner';
import firebase from 'firebase';
import 'firebase/firestore';
import Header from './common/Header';
import ListItem from './common/ListItem';
import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';

class ModuleVideoList extends Component {
    _isMounted = false;
    firestoreRef = firebase.firestore().collection('video-links');
    storageRef = firebase.storage().ref('videos');

    static navigationOptions = {
        header: null
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
                    video_name: doc.data().video_name,
                    video_date: doc.data().video_date
                });
            }.bind(this));

            if (this._isMounted) {
                this.setState( { videoNames: tempNames } );
            }

            this.state.videoNames.forEach((fileObj) => {
                const fileName = fileObj.file_name;
                const videoName = fileObj.video_name;
                const videoDate = fileObj.video_date;

                this.storageRef.child(fileName).getDownloadURL().then((url) => {
                    tempUrls.push({
                        file_name: fileName,
                        file_url: url,
                        video_name: videoName,
                        video_date: videoDate
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
                <View style={{flex: 1}}>
                    <Header 
                        subtitle="videos page"
                        leftIcon="arrow-circle-left"
                        onLeftPress={() => this.props.navigation.navigate('ModulesPage')}
                        subheader="Select a video to view!"
                    />

                    <ScrollView style={{flex: 1}}>
                        {this.state.videoUrls.map(eachVideo => {
                            const fileUrl = eachVideo.file_url;
                            const fileName = eachVideo.file_name;
                            const videoName = eachVideo.video_name;
                            const videoDate = eachVideo.video_date;

                            console.log(eachVideo);

                            return <ListItem 
                                onPress={() => this.props.navigation.navigate('Video', 
                                    { 
                                        videoSource: fileUrl,
                                        fileName: fileName,
                                        videoName: videoName,
                                        videoDate: videoDate,
                                        moduleCode: this.props.navigation.getParam('moduleCode', 'Not Available')
                                    })}
                                key={fileUrl}
                                icon={<Icon name="play-circle" color="#6bb2ff" size={34}/>}
                                title={videoName}
                                subtitle={videoDate}
                                />
                            }
                        )}
                    </ScrollView>
                </View>
            );
        }
    };
}

export default ModuleVideoList;