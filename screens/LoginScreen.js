import React, { useState } from "react";
import { Button, StyleSheet, Text , View} from 'react-native';
import { firebaseAuth, provider } from '../environment/config';
import {signInWithPopup} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
// import { getFirestore } from "firebase/firestore";
import firestore from '@react-native-firebase/firestore';




export const RegistrationScreen = ({navigation}) => {
  function googleLogin() {
    const usersCollection = firestore().collection('Users');
    console.log(usersCollection)
    signInWithPopup(firebaseAuth, provider).then((data) => {
      const userData = data.user
      console.log(userData.uid)
      console.log(userData.displayName)
      console.log(userData.email)
      writeUserData(userData.uid, userData.displayName, userData.email)
    }).then(() => navigation.navigate("Home"))

  }

  function writeUserData(userId, name, email) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
    });
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
