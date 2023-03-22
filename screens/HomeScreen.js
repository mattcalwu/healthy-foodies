import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { Divider } from "react-native-elements";
import { ScrollView } from "react-native-web";
import NavBar from "../components/NavBar";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, set, onValue, push, child, Database } from "firebase/database";
import SearchByLocationBar from "../components/SearchByLocationBar";
import ViewRestaurants, {
  testRestaurants,
} from "../components/ViewRestaurants";

export default function HomeScreen({ route, navigation }) {
  const [restaurantResults, getRestaurantResults] = useState(testRestaurants);
  const [location, setLocation] = useState("Irvine");
  const [statusLogin, setStatusLogin] = useState(false);
  const [buttonLogin, setButtonLogin] = useState("Login");
  if (typeof route.params !== "undefined") {
    global.currUserID = route.params;
  }
  function readData() {
    const db = getDatabase();
    const tasksRef = ref(db, "Users/"+ global.currUserID.userID + '/tagsAlias');
    var dataBoom;
    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data == null);
      if(data == null){
        
        dataBoom = {};
      }
      else{
        dataBoom = data;
      }
      // updateStarCount(postElement, data);
    });
    
    var sorted_cats = Object.entries(dataBoom).sort((a,b) => b[1]-a[1])
    var cat_link_url = ''
    for (let i = 0; i < sorted_cats.length; i++) {
      if (i === 3) { break; }
      if (i==0){
        cat_link_url += '&categories='+sorted_cats[i][0]
      }
      else{
        cat_link_url += '%2C'+sorted_cats[i][0]
      }
      console.log(sorted_cats[i][0]);
  }
    return cat_link_url;
  }
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
  const getYelpRestaurants = (cat_link) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: 'Bearer kxQlk8JuCHZZOdgog4Mm50AsXoVbCf0ZZ6WB784elprMWe3KIzGyyupXjNOIvoXeCQsbwB2a9UqUY5CN5qakPbXtfBO2t3ilNvKC8NQcy-wZW_tWtaqlnyapNDgaZHYx',
      },
    };
    var proxyUrl ='http://localhost:8080/proxy'// "https://cors-anywhere.herokuapp.com/";
    var targetURL = `/businesses/search?location=${location}&term=restaurants${cat_link}&open_now=true&attributes=&sort_by=distance&limit=10`;
    console.log(targetURL)
    return fetch(proxyUrl + targetURL, options)
      .then((response) => response.json()).catch(err => console.error(err))
      .then((json) => getRestaurantResults(json.businesses)).catch(err => console.error(err));
  };

  useEffect(() => {
    var cat_link;
    if (typeof global.currUserID == "undefined") {
      cat_link = '';
    }
    else {
      console.log("bruh")
      cat_link = readData()
    }
    getYelpRestaurants(cat_link);
  }, [location, restaurantResults]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subView}>
        <Button title={buttonLogin} onPress={buttonMode} />
        <Text style={styles.title}>ZotFoods</Text>
        <SearchByLocationBar locationHandler={setLocation} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ViewRestaurants
          yelpData={restaurantResults}
          navigation={navigation}
          userID={global.currUserID}
        />
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "400",
    fontSize: "40px",
    textAlign: "center",
  },
  container: {
    backgroundColor: "#eee",
    flex: 1,
  },
  subView: {
    backgroundColor: "white",
    padding: 15,
  },
  scrollOptions: {},
});
