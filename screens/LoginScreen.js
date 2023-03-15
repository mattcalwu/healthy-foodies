import React, { useState } from "react";
import {Button, Text, TextInput, StyleSheet, View} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  //Currently have navigation between login page and home page
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Email and Password</Text>
      <TextInput
        style={styles.textBox}
        placeholder="Email"
        onChangeText={newEmail => setEmail(newEmail)}
        defaultValue={email}
      />
      <TextInput
        style={styles.textBox}
        placeholder="Password"
        onChangeText={newPwd => setPassword(newPwd)}
        defaultValue={password}
      />
      <Button
        title="Go to Registration Page" 
        onPress={() => {
            navigation.navigate("Home")
      }}
      />
    </View>
  );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
      },
    textBox: {
      height: 40,
      width: '80%',
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginTop: 20,
    },
  });

export default LoginScreen