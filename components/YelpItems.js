import React from "react";
import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";

export const tempBusinesses = [
    {
        "name": "MAJI Curry - Award Winning Japanese Curry",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/tZsAdTClHKTuMdFctSIBIA/o.jpg",
        "review_count": 72,
        "categories": [
            {
            "alias": "japacurry",
            "title": "Japanese Curry"
            },
            {
            "alias": "asianfusion",
            "title": "Asian Fusion"
            },
            {
            "alias": "comfortfood",
            "title": "Comfort Food"
            }
        ],
        "rating": 4,
        "price": "$$",
    },
    {
        "name": "Postino Park Place",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/ZUgWmrJw3gAOmyqR6dSBhw/o.jpg",
        "review_count": 279,
        "categories": [
            {
            "alias": "wine_bars",
            "title": "Wine Bars"
            },
            {
            "alias": "breakfast_brunch",
            "title": "Breakfast & Brunch"
            }
        ],
        "rating": 5,
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
    },
    {
        "name": "Súp Noodle Bar by Kei Concepts",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/tFVNb6smvDgC73EpYMQl0A/o.jpg",
        "review_count": 1600,
        "categories": [
            {
            "alias": "vietnamese",
            "title": "Vietnamese"
            },
            {
            "alias": "peruvian",
            "title": "Peruvian"
            },
            {
            "alias": "asianfusion",
            "title": "Asian Fusion"
            }
        ],
        "rating": 4.5,
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        },
];

export function YelpItems({navigation, ...props}){
    return(
        <>
        {props.yelpData.map((restaurant, index)=>(
            <TouchableOpacity
                key={index}
            >
                <View style={styles.item}> 
                    <YelpItem image={restaurant.image_url}/>
                    <YelpDescription restaurant={restaurant}/>
                </View>
            </TouchableOpacity>

        ))}
        </>
    )
}

const YelpItem = (props) => {
    return(
        <>
            <Image 
            source={{uri:props.image,}}
            style={styles.image}
            />
        </>
    );
}
const YelpDescription = (props) => {
    return(
        <View>
            <Text>{props.restaurant.name}</Text>
            <Text>{props.restaurant.rating}/5 stars</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
    },
    image:{
        width: 720,
        height: 540,
    },
    item:{
        marginTop: 10,
        padding: 15,
        backgroundColor: "lightgrey",
    }
  });