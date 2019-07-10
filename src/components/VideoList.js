import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CardList from './common/CardList';
import firebase from 'firebase';

class VideoList extends Component {
    static navigationOptions = {
        title: 'Continue Watching'
    };

    state = {
        videos: []
    };

    componentWillMount() {
        const storage = firebase.storage();
        const pathReference = storage.ref('videos');

        pathReference.child('SampleVideo_1280x720_1mb.mp4').getDownloadURL().then((url) => {
            var joined = this.state.videos.concat(url);
            this.setState({ videos: joined })
        });

        pathReference.child('SampleVideo_1280x720_2mb.mp4').getDownloadURL().then((url) => {
            var joined = this.state.videos.concat(url);
            this.setState({ videos: joined })
        });

        pathReference.child('ohmy.mp4').getDownloadURL().then((url) => {
            var joined = this.state.videos.concat(url);
            this.setState({ videos: joined })
        });
    }

    //for debugging purposes
    renderVideoUrls() {
        return this.state.videos.map(x => <Text>{x}</Text>);
    }

    render() {
        var videoIdx = 0;
        
        return (
            <ScrollView>
                {this.state.videos.map(eachVideo => {
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