import React, { useEffect, useState } from "react";
import { Button, Text, TextInput, ScrollView, StyleSheet, View } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { tempBusinesses, YelpItems } from "../components/YelpItems";
import { businesses } from "../components/businesses";


const HomeScreen = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState("");
  const [statusLogin, setStatusLogin] = useState(false);
  const [buttonLogin, setButtonLogin] = useState("Login");
  const [yelpData, setYelpData ] = useState(tempBusinesses);
  const [location, setLocation] = useState("Los Angeles");
  const handleSearch = () => {
    console.log(`Searching for ${searchValue}`);
    setLocation(searchValue);
    console.log(`Location value ${location}`);
    // Add your search logic here
  };

  const getBusinessesFromYelp = () => {
    const apiURI = `https://api.yelp.com/v3/businesses/search?location=belmont&term=Restaurant&categories=&sort_by=best_match&limit=5`
    const api_key = "OZGT54NiVj5veY1qL5nqknbFR75DEnesxCcZlPpPud9y75h2V74PRqmT_3w0-IYrDVAOfWaaah946CeSgE_RTLMnjMaBxlVZKg1oDU4ILyqtUn3NdcyrqdIvkIcSZHYx"
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=Boston`;

    const apiOptions = {
        headers: {
        Authorization: `Bearer ${api_key}`,
        "Access-Control-Allow-Origin": "*",
        },
    };

    return fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then((json) =>
        setYelpData(json.businesses)
        );
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

  useEffect(()=>{
    getBusinessesFromYelp()
  },[location])
  return (
    <ScrollView>
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
      
            <YelpItems yelpData={yelpData}/>
        </View>
    </ScrollView>
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
  map: {
    width: '50%',
    height: '50%',
  },
});

export default HomeScreen;
