import React, { useState } from "react";
import { Button, StyleSheet, Text , View, SafeAreaView, TouchableOpacity } from 'react-native';
import { firebaseAuth, provider } from '../environment/config';
import {signInWithPopup} from "firebase/auth";
import { TextInput } from "react-native-web";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 

export const LoginScreen = ({navigation}) => {
  function readData() {
    
    const db = getDatabase();
    const tasksRef = ref(db, "Users/");
    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      console.log("data", data)
      // updateStarCount(postElement, data);
    });
    
  }
  function writeUserData(userId, name, email) {
    const db = getDatabase();
    const tasksRef = ref(db, "users/");
    // var playersRef = firebase.database().ref("Users/");
    set(tasksRef, {
      UserName: name,
      UserEmail: email,
    });
    console.log("Sent");
    // playersRef.set({
    //   UserName: name,
    //   UserEmail: email
    // });
    // const db = getDatabase();
    // set(ref(db, "Users/" + userId), {
    //   username: name,
    //   email: email,
    // });
  }
  function googleLogin() {
    // const usersCollection = firestore().collection('Users');
    // console.log(usersCollection)
    readData()
    signInWithPopup(firebaseAuth, provider)
      .then((data) => {
        const userData = data.user;
        console.log(userData.uid);
        console.log(userData.displayName);
        console.log(userData.email);
        writeUserData(userData.uid, userData.displayName, userData.email);
      })
      .then(() => navigation.navigate("Home"));
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.emailWrapper}>
          <MaterialIcons name="alternate-email" size={20} color="#666" style={styles.emailIcon} />
          <TextInput placeholder="Email ID" keyboardType={"email-address"} style={styles.emailInput}></TextInput>
        </View>
        <View style={styles.passwordWrapper}>
          <Feather name="lock" size={20} color="#666" style={styles.emailIcon} />
          <TextInput placeholder="Password" secureTextEntry={true} style={styles.emailInput}></TextInput>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate("Registration")}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>

        {/* <Button title={"Sign In With Google"} onPress={() => {
          googleLogin()
        }} /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#fff",
    },
    loginContainer: {
      paddingHorizontal: 25,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 30,
    },
    emailWrapper: {
      flexDirection: "row",
      borderBottomColor: "#ccc",
      borderBottomWidth: 1,
      paddingBottom: 8,
      marginBottom: 20,
    },
    passwordWrapper: {
      flexDirection: "row",
      borderBottomColor: "#ccc",
      borderBottomWidth: 1,
      paddingBottom: 8,
      marginBottom: 30,      
    },
    emailIcon: {
      marginRight: 5,
    },
    emailInput: {
      flex: 1,
      paddingVertical: 0,
    },
    loginButton: {
      backgroundColor: "#00C2FF",
      padding: 20,
      borderRadius: 10,
      marginBottom: 20,
    },
    loginButtonText: {
      textAlign: "center",
      fontWeight: '700',
      fontSize: 16,
      color: "#fff",
    },
    registerButton: {
      backgroundColor: "#8000FF",
      padding: 20,
      borderRadius: 10,
      marginBottom: 30,
    },
    registerButtonText: {
      textAlign: "center",
      fontWeight: '700',
      fontSize: 16,
      color: "#fff",
    }
  });

export default LoginScreen;
