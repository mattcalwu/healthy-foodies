import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { Divider } from 'react-native-elements';
import NavBar from "../components/NavBar";
import { testRestaurants, } from "../components/ViewRestaurants";
export const FavoritesScreen = ({ navigation }) => {
  const [restaurantResults, getRestaurantResults] = useState(testRestaurants);

  return (
    <SafeAreaView style ={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Favorite Restaurants</Text>
        </View>
        <Divider width={1.9} color={"#C9C9C9"} />
        <ScrollView showsVerticalScrollIndicator={false}>
        <>
            {testRestaurants.map((restaurant, index) => (
                <TouchableOpacity
                key={index}
                activeOpacity={1}
                style={styles.container}
                onPress={() =>
                    navigation.navigate("InformationView", {
                    name: restaurant.name,
                    image: restaurant.image_url,
                    price: restaurant.price,
                    categories: restaurant.categories,
                    address: restaurant.location.display_address,
                    userIDNum: 1,
                    })
                }
                >
                <View style={styles.objectContainer}>
                    <YelpImage image={restaurant.image_url} />
                    <YelpInfo
                    storeName={restaurant.name}
                    storeRating={restaurant.rating}
                    storeDistance={restaurant.distance}
                    reviewCount={restaurant.review_count}
                    price={restaurant.price}
                    />
                </View>
                </TouchableOpacity>
            ))}
        </>
        </ScrollView>
        <NavBar homeColor="grey" profileColor="grey" favoriteColor="black" />
    </SafeAreaView>
  );
};

const YelpImage = (props) => (
    <Image source={{ uri: props.image }} style={styles.imageContainer} />
  );
  
  const YelpInfo = (props) => (
    <View style={styles.restaurantInfoContainer}>
      <View>
        <Text style={styles.restaurantTitle}> {props.storeName} </Text>
        <Text style={styles.subText}>
          {" "}
          {(props.storeDistance / 1609).toFixed(2)} mi
        </Text>
        <Text style={styles.subText}> {props.price}</Text>
      </View>
      <View>
        <Text style={styles.restaurantRatingText}>Rating</Text>
        <Text style={styles.restaurantRatingNumber}>{props.storeRating}</Text>
        <Text style={styles.subText}>{props.reviewCount} reviews</Text>
      </View>
    </View>
  );

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  titleContainer: {
    marginVertical: 15,
    marginRight: 50,
  },
  title: {
    fontWeight: "400",
    fontSize: "30px",
    textAlign: "center",
    fontWeight: 'bold',
  },
  objectContainer: {
    margin: 10,
    padding: 12,
    backgroundColor: "white",
    borderRadius: "15px",
  },
  imageContainer: {
    width: "100%",
    height: 180,
    borderRadius: "8px",
  },
  restaurantInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  restaurantTitle: {
    flex: 1,
    flexWrap: "wrap",
    fontSize: 20,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 16,
    color: "gray",
  },
  restaurantRatingText: {
    textAlign: "right",
    fontSize: 18,
    color: "#4F6BFF",
    fontWeight: "bold",
  },
  restaurantRatingNumber: {
    textAlign: "right",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FavoritesScreen;