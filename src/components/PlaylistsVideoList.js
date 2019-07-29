import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Spinner from './common/Spinner';
import firebase from 'firebase';
import 'firebase/firestore';
import Header from './common/Header';
import ListItem from './common/ListItem';
import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';

class PlaylistsVideoList extends Component {
    _isMounted = false;
    userId = firebase.auth().currentUser.uid;
    firestoreRef = firebase.firestore().collection('playlists').where('user_id', '==', this.userId);
    storageRef = firebase.storage().ref('videos');
    //doc.data().playlistName.map()

    static navigationOptions = {
        header: null
    };

    constructor(){
        super();

        window.test = "hello global??";
        
        this.state = {
            videoNames: [],
            videoUrls: [],
            loading: true
        };
    };

    componentWillMount() {
        this._isMounted = true;

        var playlistName = this.props.navigation.getParam('playlistName', 'NA');

        var tempNames = [];
        var tempUrls = [];

        this.firestoreRef
        .where('playlist_name', '==', playlistName)
        .get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                tempNames.push({
                    video_name: doc.data().video_name,
                    file_name: doc.data().file_name,
                    module_code: doc.data().module_code
                });
                console.log(doc.data().video_name);
            }.bind(this));

            if (this._isMounted) {
                this.setState( { videoNames: tempNames } );
            }

            this.state.videoNames.forEach((obj) => {
                var fileName = obj.file_name;
                var videoName = obj.video_name;
                var moduleCode = obj.module_code;

                this.storageRef.child(fileName).getDownloadURL().then((url) => {
                    tempUrls.push({
                        file_url: url,
                        video_name: videoName,
                        module_code: moduleCode
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
                <View style={{flex: 1}}>
                    <Header 
                        subtitle="videos page"
                        leftIcon="arrow-circle-left"
                        onLeftPress={() => this.props.navigation.navigate('PlaylistsPage')}
                        subheader="Select a video to view!"
                    />

                    <ScrollView style={{flex: 1}}>
                        {this.state.videoUrls.map(eachVideo => {
                            const fileUrl = eachVideo.file_url;
                            const videoName = eachVideo.video_name;
                            const moduleCode = eachVideo.module_code;

                            console.log(eachVideo);

                            return <ListItem 
                                onPress={() => this.props.navigation.navigate('Video', { videoSource: fileUrl})}
                                key={fileUrl}
                                icon={<Icon name="play-circle" color="#6bb2ff" size={34}/>}
                                title={videoName}
                                subtitle={moduleCode}
                                />
                            }
                        )}
                    </ScrollView>
                </View>
            );
        }
    };
}

export default PlaylistsVideoList;