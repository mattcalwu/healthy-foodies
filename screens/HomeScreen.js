import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { Divider } from "react-native-elements";
import { ScrollView } from "react-native-web";
import NavBar from "../components/NavBar";
import { getAuth, signOut } from "firebase/auth";
import SearchByLocationBar from "../components/SearchByLocationBar";
import ViewRestaurants, { testRestaurants, } from "../components/ViewRestaurants";

export default function HomeScreen({ navigation }) {
  const [restaurantResults, getRestaurantResults] = useState(testRestaurants);
  const [location, setLocation] = useState('Irvine');
  const [statusLogin, setStatusLogin] = useState(false);
  const [buttonLogin, setButtonLogin] = useState("Login");
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
  const getYelpRestaurants = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer wZCH7TWc34mJfGGd8iA6nWXkFLwygn4_7MpPuVTSzMtvqPki5OGoQnjz4BjlhDmanub8LXN9EebsWOkhzgG1F6xeLYZlbEJf2dW5u6_FTGX0M0H9jzXsWeWMh30XZHYx'
      }
    };
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    var targetURL = `https://api.yelp.com/v3/businesses/search?location=${location}&term=restaurants`

    return fetch(proxyUrl + targetURL, options)
      .then((response) => response.json())
      .then((json) => getRestaurantResults(json.businesses));
  };

  useEffect(() => {
    getYelpRestaurants();
  }, [location, restaurantResults]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subView}>
      <Button title={buttonLogin} onPress={buttonMode} />
        <Text style={styles.title}>ZotFoods</Text>
        <SearchByLocationBar locationHandler={setLocation}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ViewRestaurants yelpData={restaurantResults} navigation={navigation} />
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "400",
    fontSize: "40px",
    textAlign: "center",
  },
  container: {
    backgroundColor: "#eee", 
    flex: 1
  },
  subView: {
    backgroundColor: "white", 
    padding: 15
  },
  scrollOptions: {

  },
});