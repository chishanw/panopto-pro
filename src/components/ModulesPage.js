import React, { Component } from 'react';
import NavigationPage from './common/NavigationPage';
import CardSection from './common/CardSection';
import Button from './common/Button';

class ModulesPage extends Component {
    static navigationOptions = {
        title: 'Modules Page'
    };

    render() {
        return (
            <NavigationPage>
                <CardSection>
                    <Button buttonText="CS2030" 
                    onPress={() => this.props.navigation.navigate('ModuleVideoList')}/>
                </CardSection>

                <CardSection>
                    <Button buttonText="CS2040" />
                </CardSection>

                <CardSection>
                    <Button buttonText="CS2100" />
                </CardSection>

                <CardSection>
                    <Button buttonText="GER1000" />
                </CardSection>
            </NavigationPage>
        );
    };
}

export default ModulesPage;