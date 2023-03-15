import React, { useState } from "react";
import { Button, Text, TextInput, StyleSheet, View } from "react-native";
import { firebaseAuth, provider } from "../environment/config";
import { getAuth, signOut } from "firebase/auth";

const HomeScreen = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState("");
  const [statusLogin, setStatusLogin] = useState(false);
  const [buttonLogin, setButtonLogin] = useState("Login");
  const handleSearch = () => {
    console.log(`Searching for ${searchValue}`);
    // Add your search logic here
  };

  const buttonMode = () => {
    setStatusLogin(!statusLogin);
    if (statusLogin) {
      console.log("log out mode");
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
        setButtonLogin("Login");
    } else {
      setButtonLogin("Logout");
      console.log("log in mode");
      navigation.navigate("Login");
    }
  };
  return (
    <View style={styles.container}>
      <Button title={buttonLogin} onPress={buttonMode} />
      <Text style={styles.title}>Welcome to ZotFoods</Text>
      <Text style={styles.subtitle}>
        Get personalized food recommendations based on your preferences.
      </Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for cuisine"
        onChangeText={setSearchValue}
        onSubmitEditing={handleSearch}
        value={searchValue}
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
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 32,
  },
  searchBar: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 20,
  },

  image: {
    width: "100%",
    height: "30%",
    marginTop: 20,
  },
});

export default HomeScreen;
