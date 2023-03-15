import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import { firebaseAuth, provider } from '../environment/config';
import {signInWithPopup} from "firebase/auth";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export default class Login extends React.Component {
  // state = { email: '', password: '', errorMessage: null }
  // provider = new firebaseAuth.auth.GoogleAuthProvider();

  googleLogin = () => {
    signInWithPopup(firebaseAuth, provider).then((data) => {
      const userData = data.user
      console.log(userData.displayName)
      console.log(userData.email)
    })
  }
  handleLogin = () => {
    // TODO: Firebase stuff...
    console.log('handleLogin')
    firebaseAuth.signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  render() {
    return (

        <View >
          <Text >Login</Text>
          
         
          <button onClick={this.googleLogin}>Signin With Google</button>
          
         
        </View>
    )
  }
}