import React from "react";
import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";

// Testing with Yelp API data
export const testRestaurants = [
  {
    name: "Young Tyke's Cafe",
    image_url:
      "https://media.discordapp.net/attachments/400503489546944512/1086513435602333716/IMG_20230317_193932078.jpg?width=893&height=670",
    categories: [
      {
        alias: "british",
        title: "British",
      },
      {
        alias: "cafe",
        title: "Cafe",
      },
    ],
    price: "$$",
    rating: 4.5,
    review_count: 2036,
    distance: 600,
    "location": {
      "address1": "4852 S Pulaski Rd",
      "address2": "",
      "address3": "",
      "city": "Chicago",
      "zip_code": "60632",
      "country": "US",
      "state": "IL",
      "display_address": [
        "4852 S Pulaski Rd",
        "Chicago, IL 60632"
      ]
    },
  },
  {
    name: "Kura Revolving Sushi Bar",
    image_url:
      "https://media.discordapp.net/attachments/400503489546944512/1083953269069590568/IMG_20230310_191729960.jpg?width=893&height=670",
    categories: [
      {
        alias: "sushi",
        title: "Sushi",
      },
      {
        alias: "japanese",
        title: "Japanese",
      },
    ],
    price: "$$$",
    rating: 3.5,
    review_count: 8015,
    distance: 3500,
    "location": {
      "address1": "2002 S Wentworth Ave",
      "address2": "Ste 103",
      "address3": "",
      "city": "Chicago",
      "zip_code": "60616",
      "country": "US",
      "state": "IL",
      "display_address": [
        "2002 S Wentworth Ave",
        "Ste 103",
        "Chicago, IL 60616"
      ]
    },
  },
  {
    name: "Los Pollos Hermanos",
    image_url:
      "https://media.discordapp.net/attachments/400503489546944512/1083539276429537401/A80C3088-BA1D-471C-8C65-DE0E3312CCED.jpg?width=502&height=670",
    categories: [
      {
        alias: "mexican",
        title: "Mexican",
      },
      {
        alias: "taco",
        title: "Taco Shop",
      },
    ],
    price: "$",
    rating: 5.0,
    review_count: 62,
    distance: 1000,
    "location": {
      "address1": "2131 S Archer Ave",
      "address2": "",
      "address3": null,
      "city": "Chicago",
      "zip_code": "60616",
      "country": "US",
      "state": "IL",
      "display_address": [
        "2131 S Archer Ave",
        "Chicago, IL 60616"
      ]
    },
  },
];

export default function ViewRestaurants({ navigation, ...props }) {
  // if (typeof props.userID !== "undefined") {
  //   console.log("viewing resutatint", props.userID);

  //   // the variable is defined
  // } else {
  //   console.log("NOTTOTOOTTO");
  // }
  return (
    <>
      {props.yelpData.map((restaurant, index) => (
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
              userIDNum: props.userID,
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
  );
}

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
    marginBottom: 5,
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
