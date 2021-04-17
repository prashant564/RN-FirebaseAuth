import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { CardSection, Button, Card, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false }

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {this.setState( {email: '', password: '', error: '', loading: false} )})
            .catch( () => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {this.setState( {email: '', password: '', error: '', loading: false} )})
                    .catch( () => {
                        this.setState( {error: 'Authentication Failed!!', loading: false} )
                    } )
            } )
    }

    checkIfShowLoading() {
       if(this.state.loading) {
            return <Spinner size='small'/>;
        } 
        return (<Button text="Log in"
            onPress={this.onButtonPress.bind(this)}/>);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="Enter your email here"
                        value={this.state.email}
                        onChangeText = {email => {this.setState({email})}}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="Enter your password here"
                        value={this.state.password}
                        onChangeText = {password => {this.setState({password})}}
                    />
                </CardSection>
                <Text style={styles.errStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.checkIfShowLoading()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;