import React, { useState } from "react";
import { Button, Text } from 'react-native';
import { firebaseAuth, provider } from '../environment/config';
import {signInWithPopup} from "firebase/auth";

export const RegistrationScreen = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function googleLogin() {
    signInWithPopup(firebaseAuth, provider).then((data) => {
      const userData = data.user
      console.log(userData.displayName)
      console.log(userData.email)
    }).then(() => navigation.navigate("Home"))

  }
  return (
    <>
      <Text >ZotFoods</Text>
      <Text>Account Registration</Text>
      <Button title={"SignIn With Google"} onPress={() => {
        googleLogin()
      }} />
    </>
  );
};



export default RegistrationScreen;
