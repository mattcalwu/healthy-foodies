import React from "react";
import { TouchableOpacity } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

// Testing with Yelp API data
export const testRestaurants = [
    {
      "name": "Your Momma's Cafe",
      "image_url": "https://media.discordapp.net/attachments/400503489546944512/1086513435602333716/IMG_20230317_193932078.jpg?width=893&height=670",
      "categories": [
        {
          "alias": "british",
          "title": "British"
        },
        {
          "alias": "cafe",
          "title": "Cafe"
        },
      ],
      "price": "$$",
      "rating": 4.5,
    },
    {
      "name": "Kura Revolving Sushi Bar",
      "image_url": "https://media.discordapp.net/attachments/400503489546944512/1083953269069590568/IMG_20230310_191729960.jpg?width=893&height=670",
      "categories": [
        {
          "alias": "sushi",
          "title": "Sushi"
        },
        {
          "alias": "japanese",
          "title": "Japanese"
        },
      ],
      "price": "$$$",
      "rating": 3.5,
    },
    {
      "name": "Los Pollos Hermanos",
      "image_url": "https://media.discordapp.net/attachments/400503489546944512/1083539276429537401/A80C3088-BA1D-471C-8C65-DE0E3312CCED.jpg?width=502&height=670",
      "categories": [
        {
          "alias": "mexican",
          "title": "Mexican"
        },
        {
          "alias": "taco",
          "title": "Taco Shop"
        },
      ],
      "price": "$",
      "rating": 5.0,
    },
];

export default function ViewRestaurants(props) {
    return (
        <TouchableOpacity activeOpacity={1} style={styles.container}>
            {props.restaurantData.map((restaurant, index) => (
                <View key={index} style={styles.objectContainer}>
                    <RestaurantImage 
                        image={restaurant.image_url} 
                    />
                    <RestaurantInformation 
                        name={restaurant.name}
                        rating={restaurant.rating}
                    />
                </View>
            ))}
        </TouchableOpacity>
    )
}

const RestaurantImage = (props) => (
    <>
        <Image 
            source={{uri: props.image}}
            style={styles.imageContainer}
        />
        <TouchableOpacity style={{position: 'absolute', right: 20, top:15}}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='white'></MaterialCommunityIcons>
        </TouchableOpacity>
    </>
)

const RestaurantInformation = (props) => (
    <View style={styles.restaurantInfoContainer}>
        <View>
            <Text style={styles.restaurantTitle}> {props.name} </Text>
            <Text style={styles.restaurantDistance}>3.5 mi</Text>
        </View>
        <View>
            <Text style={styles.restaurantRatingText}>Rating</Text>
            <Text style={styles.restaurantRatingNumber}>{props.rating}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
      marginBottom: 30,
    },
    objectContainer: {
      margin: 10,
      padding: 12,
      backgroundColor: "white",
      borderRadius: '15px',
    },
    imageContainer: {
      width: '100%',
      height: 180,
      borderRadius: '8px',
    },
    restaurantInfoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 5,
    },
    restaurantTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    restaurantDistance: {
      fontSize: 16,
      color: 'gray',
    },
    restaurantRatingText: {
      textAlign: 'right',
      fontSize: 18,
      color: '#4F6BFF',
      fontWeight: 'bold',
    },
    restaurantRatingNumber: {
      textAlign: 'right',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });