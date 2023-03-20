import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import GetAddress from "./GetAddress";
import RestaurantMenuObjects from "./restaurantMenuObjects";
import RestaurantSnippet from "./RestaurantSnippet";


const testFoods = [
    {
      title: "McGriddle",
      description: "What happens is the One True God grows them on trees in the Elysian Fields using a heretofore unused incantation. He then proceeds to magic them down to your local eatery where whatever Ghetto Bastard cook your McDonalds has rescued from welfare that week proceeds to wrap it in cellophane and pass it along to you, the fortunate consumer.",
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
      description: "And then, then my friends, they wrapped it in a sumptuous pancake bun! As your taste buds try to process that amazing piece of information, IT hits them…the syrup nugget. THE MOTHERFUCKING SYRUP NUGGET!",
      price: "$16.00",
    },
];

export default function InformationView({ route }) {
    return (
        <View>
            <RestaurantSnippet route={route} />
            <Divider width={1.8} style={styles.gap} />
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