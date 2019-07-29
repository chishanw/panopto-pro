import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import firebase from 'firebase';
import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';

import Spinner from './common/Spinner';
import ListItem from './common/ListItem';
import Header from './common/Header';

class ModulesPage extends Component {
    static navigationOptions = {
        header: null
    };
    
    state = {
        moduleCodes: [],
        loading: true
    }

    _isMounted = false;

    componentWillMount() {
        this._isMounted = true;

        const firestoreRef = firebase.firestore();
        const modulesRef = firestoreRef.collection('module_codes');
        var tempArray = [];

        modulesRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var moduleCode = doc.id;
                tempArray.push(moduleCode);
            }.bind(this));

            if (this._isMounted) {
                this.setState( { moduleCodes: tempArray, loading: false } );
            }
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
                        subtitle="Modules Page"
                        leftIcon="arrow-circle-left"
                        onLeftPress={() => this.props.navigation.navigate('Home')}
                        subheader="Select a module to view!"
                    />

                    <ScrollView style={{flex: 1}}>
                        {
                            this.state.moduleCodes.map(module => {
                                return <ListItem 
                                    key={module}
                                    icon={<Icon name="book" color="#6bb2ff" size={30}/>}
                                    title={module.toUpperCase()}
                                    onPress={() => this.props.navigation.navigate('ModuleVideoList', { moduleCode: module })}
                                />
                            })
                        }
                    </ScrollView>
                </View>
            );
        }
    };
}

export default ModulesPage;