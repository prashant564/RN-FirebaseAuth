import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase'; 
import { Header, Button, Spinner } from './Components/common';
import LoginForm from './Components/LoginForm';

class App extends Component {
    state = { loggedIn: null }

    componentDidMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAMtmdWrzRXR7l1EqsDFNClkCVP-X8Cd6E",
            authDomain: "rnauth-25924.firebaseapp.com",
            projectId: "rnauth-25924",
            storageBucket: "rnauth-25924.appspot.com",
            messagingSenderId: "243600863278",
            appId: "1:243600863278:web:37422bbfd218bbfe286fbf",
            measurementId: "G-LLWTWWPSFL"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (<Button 
                    onPress={() => firebase.auth().signOut()}
                    text="Log out"/>);
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large"/>
        }
    }

    render() {
        return(
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;