import React, { useState } from "react";
import { Button, StyleSheet, Text , View} from 'react-native';
import { firebaseAuth, provider } from '../environment/config';
import {signInWithPopup} from "firebase/auth";

export const RegistrationScreen = ({navigation}) => {
  function googleLogin() {
    signInWithPopup(firebaseAuth, provider).then((data) => {
      const userData = data.user
      console.log(userData.displayName)
      console.log(userData.email)
    }).then(() => navigation.navigate("Home"))

  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to your Account with Google</Text>
      <Button title={"Sign In With Google"} onPress={() => {
        googleLogin()
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
    },
  });

export default RegistrationScreen;
