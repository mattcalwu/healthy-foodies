import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Divider, Rating } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'; 


const yelpRestaurantInfo = {
    name: "Amon Gus's German Weinerschnitzels",
    image: "https://cdn.discordapp.com/attachments/400503489546944512/1079457290618404884/F8E23EE3-7747-4844-80B6-892ADE44324B.jpg",
    price: "$",
    reviews: "244",
    rating: 3.5,
    distance: 5.5,
    categories: [
        {
            title: 'German'
        },
        {
            title: "Fast Food"
        }
    ]
};

export default function RestaurantSnippet(props) {
    const {name, image, price, reviews, distance, categories} = props.route.params;
    const formattedCategories = categories.map((cat) => cat.title).join(' * ');
    const description = `${formattedCategories} * ${(distance/1609).toFixed(2)} mi ${price ? ' * ' + price : ""} * ${reviews} reviews`;

    const navigation = useNavigation();
    return (
        <View>
            <SnippetImage image={image} />
            <TouchableOpacity 
                style={{position: 'absolute', right: 25, top:15}}
                onPress={() => navigation.navigate('Home')}
            >
                <MaterialIcons name="cancel" size={32} color="red" style={styles.cancelButton} />
            </TouchableOpacity>
            <SnippetTitle title={name} />
            <SnippetDescription description={description} />
        </View>
    )
}


const SnippetImage = (props) => (
    <Image source={{uri: props.image}} style={styles.snippetImage} />
)

const SnippetTitle = (props) => (
    <Text style={styles.snippetTitle}>{props.title}</Text>
)

const SnippetDescription = (props) => (
    <Text style={styles.snippetDescription}>{props.description}</Text>
)

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      margin: 10, 
      marginHorizontal: 30,
      justifyContent: 'space-between',
    },
    snippetImage: {
      width: '100%',
      height: 180,
    },
    snippetTitle: {
      fontSize: 29,
      fontWeight: '600',
      marginTop: 4,
      marginHorizontal: 15,
    },
    snippetDescription: {
      marginTop: 8,
      marginHorizontal: 15,
      fontSize: 15.5,
      fontWeight: '400',
    },
  });