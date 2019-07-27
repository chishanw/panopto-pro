import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import NavigationPage from './common/NavigationPage';
import CardSection from './common/CardSection';
import MyButton from './common/MyButton';
import Spinner from './common/Spinner';

class ModulesPage extends Component {
    static navigationOptions = {
        title: 'Modules Page'
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
                tempArray.push(doc.id);
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
                <NavigationPage>
                    {
                        this.state.moduleCodes.map(module => {
                            return <CardSection key={module}>
                                <MyButton buttonText={module}
                                onPress={() => this.props.navigation.navigate('ModuleVideoList', {moduleCode: module})} />
                            </CardSection>
                        })
                    }
                </NavigationPage>
            );
        }
    };
}

export default ModulesPage;