import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import MyButton from './common/MyButton';
import Spinner from './common/Spinner';
import Header from './common/Header';
import firebase from 'firebase';

class AddPlaylist extends Component {
    firestoreRef = firebase.firestore().collection('playlistNames');

    static navigationOptions = {
        header: null
    }

    state = {
        playlistName: '',
        hasError: false,
        displayMessage: '',
        loading: false
    }

    onButtonPress() {
        var userId = firebase.auth().currentUser.uid;

        const { playlistName } = this.state;

        this.setState({loading: true});

        if (playlistName.length != 0) {
            this.firestoreRef.add({
                userId: userId,
                playlistName: playlistName
            });
            this.setState({
                loading: false,
                displayMessage: 'Successfully added playlist! Refresh the previous page for updates.'
            });
        }
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />
        }

        return (
            <MyButton buttonText="Submit"
            onPress={this.onButtonPress.bind(this)}/>
        );
    }

    render() {
        return (
            <View style={{flex: 1, alignSelf: 'stretch'}}>
                <Header
                    subtitle="add playlist"
                    leftIcon="arrow-circle-left"
                    onLeftPress={() => this.props.navigation.navigate('PlaylistsPage')}
                />
                <Card 
                    titleAvailable={true} 
                    cardTitle="Add a Playlist" 
                    cardSubtitle="Organise your content the way you like it!">

                    <CardSection>
                        <Input 
                            label="Playlist Name"
                            value={this.state.playlistName}
                            onChangeText={playlistName => this.setState({ playlistName })}
                            placeholder="name"
                        />
                    </CardSection>

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>

                <Text 
                    style={{
                        color: this.state.hasError ? 'red' : 'green', 
                        textAlign: 'center', 
                        paddingTop: 5}}>
                    {this.state.displayMessage}
                </Text>
            </View>
        );
    };
}

const styles = {
    titleAvailable: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 26,
        textAlign: 'center',
        marginTop: 25,
        paddingBottom: 20
    }
}

export default AddPlaylist;