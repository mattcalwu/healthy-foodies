import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Divider } from "react-native-elements";
import { ScrollView } from "react-native-web";
import NavBar from "../components/navBar";
import SearchBar from "../components/SearchBar";
import ViewRestaurants, { testRestaurants, } from "../components/viewRestaurants";

// YELP
const YELP_API_KEY = "OZGT54NiVj5veY1qL5nqknbFR75DEnesxCcZlPpPud9y75h2V74PRqmT_3w0-IYrDVAOfWaaah946CeSgE_RTLMnjMaBxlVZKg1oDU4ILyqtUn3NdcyrqdIvkIcSZHYx";

export default function HomeScreen({ navigation }) {
  const [restaurantData, getRestaurantResults] = useState(testRestaurants);
  const [location, setLocation] = useState('Irvine');
  
  const getYelpRestaurants = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${YELP_API_KEY}`
      }
    };
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    var testURL = 'https://api.yelp.com/v3/businesses/search?location=LosAngeles&term=restaurants'

    return fetch(proxyUrl + testURL, options)
      .then((response) => response.json())
      .then((json) => getRestaurantResults(json.businesses));
  };

  useEffect(() => {
    getYelpRestaurants();
  }, [location, restaurantData]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subView}>
        <Text style={styles.title}>ZotFoods</Text>
        <SearchBar locationHandler={setLocation}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ViewRestaurants restaurantData={restaurantData} navigation={navigation} />
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