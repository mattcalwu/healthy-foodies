import React, { FC, ReactElement, useState } from "react";
import { Button, Text, StyleSheet, TextInput } from "react-native";
// import Parse from "parse/react-native";

export const RegistrationScreen = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Text style={styles.title}>ZotFoods</Text>
      <Text>Account Registration</Text>
      <TextInput
        style={styles.input}
        value={username}
        placeholder={"Username"}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title={"Sign Up"} onPress={() => {
        navigation.navigate("Home")
      }} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default RegistrationScreen;