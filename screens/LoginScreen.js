import React, { useState } from "react";
import {Button, TextInput, StyleSheet, View} from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <View style={styles.container}>
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
        title="LOGIN"
        onPress={e => handleSubmit(e)}
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