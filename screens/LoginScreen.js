import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { firebaseAuth, provider } from "../environment/config";
import { signInWithPopup } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";

export const RegistrationScreen = ({ navigation }) => {
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
    const tasksRef = ref(db, "Users/");
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
    <View style={styles.container}>
      <Text style={styles.title}>Login to your Account with Google</Text>
      <Button
        title={"Sign In With Google"}
        onPress={() => {
          googleLogin();
        }}
      />
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
