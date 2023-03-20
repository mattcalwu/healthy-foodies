import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Divider } from "react-native-elements";
import { ScrollView } from "react-native-web";
import NavBar from "../components/navBar";
import SearchBar from "../components/SearchBar";
import ViewRestaurants, { testRestaurants, } from "../components/viewRestaurants";

// YELP
const YELP_API_KEY = "wZCH7TWc34mJfGGd8iA6nWXkFLwygn4_7MpPuVTSzMtvqPki5OGoQnjz4BjlhDmanub8LXN9EebsWOkhzgG1F6xeLYZlbEJf2dW5u6_FTGX0M0H9jzXsWeWMh30XZHYx";

export default function HomeScreen({ navigation }) {
  const [restaurantData, getRestaurantResults] = useState(testRestaurants);
  
  const getYelpRestaurants = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${YELP_API_KEY}`
      }
    };
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    var testURL = 'https://api.yelp.com/v3/businesses/search?location=SanDiego&term=restaurants&categories='

    return fetch(proxyUrl + testURL, options)
      .then((response) => response.json())
      .then((json) => getRestaurantResults(json.businesses));
  };

  useEffect(() => {
    getYelpRestaurants();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subView}>
        <Text style={styles.title}>ZotFoods</Text>
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ViewRestaurants restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1}>
        <NavBar />
      </Divider>
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