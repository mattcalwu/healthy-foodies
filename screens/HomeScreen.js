import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { ScrollView } from "react-native-web";
import NavBar from "../components/NavBar";
import { getAuth, signOut } from "firebase/auth";
import SearchByLocationBar from "../components/SearchByLocationBar";
import ViewRestaurants, { testRestaurants, } from "../components/ViewRestaurants";
import { throttle } from "lodash";

export default function HomeScreen({ route, navigation }) {
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

  // const throttledYelpRestaurantSearch = throttle(() => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'Origin': 'http://localhost:19006/',
  //       'Access-Control-Allow-Headers': '*',
  //       'Access-Control-Allow-Origin': 'http://localhost:19006/',
  //       accept: 'application/json',
  //       Authorization: 'Bearer wZCH7TWc34mJfGGd8iA6nWXkFLwygn4_7MpPuVTSzMtvqPki5OGoQnjz4BjlhDmanub8LXN9EebsWOkhzgG1F6xeLYZlbEJf2dW5u6_FTGX0M0H9jzXsWeWMh30XZHYx'
  //     }
  //   };

  //   return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}&term=restaurants`, options)
  //     .then((response) => response.json())
  //     .then((json) => getRestaurantResults(json.businesses))
  //     .catch(error => {
  //       console.log("Error:", error);
  //     });
  // }, 5000);

  // useEffect(() => {
  //   throttledYelpRestaurantSearch();
  // }, [location, restaurantResults]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subView}>
      <Button title={buttonLogin} onPress={buttonMode} />
        <Text style={styles.title}>ZotFoods</Text>
        <SearchByLocationBar locationHandler={setLocation}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* <ViewRestaurants yelpData={restaurantResults} navigation={navigation} userID={route.params} /> */}
      </ScrollView>
      <NavBar homeColor="black" profileColor="grey" favoriteColor="grey" />
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