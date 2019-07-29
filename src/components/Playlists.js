import React, { Component } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import firebase from 'firebase';
import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';
import NavigationPage from './common/NavigationPage';
import CardSection from './common/CardSection';
import MyButton from './common/MyButton';
import Header from './common/Header';
import ListItem from './common/ListItem';
import Spinner from './common/Spinner';

class Playlists extends Component {
    firestoreRef = firebase.firestore().collection('playlistNames');
    _isMounted = false;

    static navigationOptions = {
        header: null
    };

    state = {
        playlists: [],
        loading: true,
        refreshing: false
    }

    componentWillMount() {
        this._isMounted = true;

        var userId = firebase.auth().currentUser.uid;

        var tempArray = [];

        this.firestoreRef
        .where('userId', '==', userId)
        .get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var playlistName = doc.data().playlistName;
                tempArray.push(playlistName);
                console.log(playlistName);
            }.bind(this));

            if (this._isMounted) {
                this.setState( { playlists: tempArray, loading: false } );
            }
        }.bind(this));
    }

    onRefresh() {
        this.setState({refreshing: true});

        var userId = firebase.auth().currentUser.uid;

        var tempArray = [];

        this.firestoreRef
        .where('userId', '==', userId)
        .get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var playlistName = doc.data().playlistName;
                tempArray.push(playlistName);
                console.log(playlistName);
            }.bind(this));

            if (this._isMounted) {
                this.setState( { playlists: tempArray, loading: false, refreshing: false } );
            }
        }.bind(this));
    }

    render() {
        if (this.state.loading) {
            return <Spinner size="large" />
        } else {
            return (
                <View style={{flex: 1}}>
                <Header
                    subheader="Organise your content!"
                    subtitle="my playlists"
                    leftIcon="arrow-circle-left"
                    rightIcon="plus-circle"
                    onLeftPress={() => this.props.navigation.navigate('Home')}
                    onRightPress={() => this.props.navigation.navigate('AddPlaylist')}
                />
    
                {console.log(this.state.playlists)}
    
                <ScrollView 
                    refreshControl={
                        <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh.bind(this)}
                        />}
                    style={{flex: 1}}>
                    {
                        this.state.playlists.map(playlistName => {
                            return <ListItem 
                                key={playlistName}
                                icon={<Icon name="film" color="#6bb2ff" size={30}/>}
                                title={playlistName}
                                onPress={() => this.props.navigation.navigate('PlaylistsVideoList', {playlistName: playlistName})}
                            />
                        })
                    }
                </ScrollView>
                </View>
            );
        }
    };
}

export default Playlists;