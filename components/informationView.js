import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import RestaurantMenuObjects from "./restaurantMenuObjects";
import RestaurantSnippet from "./RestaurantSnippet";


const testFoods = [
    {
      title: "McGriddle",
      description: "What the frosted flakes did you just frootloop about me you little captain crunch? I’ll have you know I’m a part of a balanced breakfast and have under 300 confirmed calories per a serving.",
      price: "$6.50",
    },
    {
      title: "McHamburger",
      description: "You proceed to ingest this finery in the vain hope that your obviously overmatched taste buds can somehow grasp the delectable intricacies it is suddenly faced with. Is that egg?",
      price: "$3.15",
    },
    {
      title: "McMac n' Cheese",
      description: "Why yes it is, and bacon too. But wait–they didn’t add…yes they did, yes they did indeed. They added cheese.",
      price: "$60.01",
    },
    {
      title: "McSoup",
      description: "The cholesterol drop that makes you bee happy and bee healthy. Your chances of having a heart attack have been lowered. You can eat cereal anytime, everyday and can buy over 700 different brands, and that’s just general mills cereal.",
      price: "$16.00",
    },
];

export default function InformationView({ route }) {
    return (
        <View>
            <RestaurantSnippet route={route} />
            <Divider width={1.5} color={"black"} style={styles.gap} />
            <RestaurantMenuObjects food={testFoods}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      margin: 10, 
      marginHorizontal: 30,
      justifyContent: 'space-between',
    },
    gap: {
      marginTop: 20,
    },
    cancelButton: {
      marginTop: 20,
    },
  });