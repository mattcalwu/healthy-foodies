import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function SearchBar({locationHandler}) {
    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete 
                query={{ key: "AIzaSyD_1LUsfmLataYpyxtqHOgyCUVwQsCwaxQ" }}
                requestUrl={{
                  useOnPlatform: 'all', // or "all"
                  url:
                    'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api', // or any proxy server that hits https://maps.googleapis.com/maps/api
                }}
                onPress={(data, details = null) => {
                  console.log(data.description);
                  const city = data.description.split(",")[0];
                  locationHandler(city);
                }}
                placeholder="Search for Cuisine" 
                styles={styles.searchBar}
                renderLeftButton={() => (
                    <View style={styles.searchMapIcon}>
                      <Ionicons name="location-sharp" size={24} color="red"/>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 15, 
      flexDirection: "row",
    },
    searchBar: {
      textInput: {
        backgroundColor: "#eee", 
        borderRadius: 20,
        fontWeight: "700",
        color: '#9B9B9B',
        marginTop: 7,
      },
      textInputContainer: {
        backgroundColor: "#eee",
        borderRadius: 50,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
      }
    },
    searchMapIcon: {
        marginLeft: 10
    }
  });