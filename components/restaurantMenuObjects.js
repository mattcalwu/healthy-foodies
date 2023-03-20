import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import { ScrollView } from "react-native-web";


export default function RestaurantMenuObjects({food}) {
    return (
      <ScrollView>
      {food.map((food,index) => (
        <View key={index}>
          <View style={styles.container}>
              <FoodInformation food={food} />
          </View>
          <Divider width={0.5} orientation="vertical" style={styles.divider} />
        </View>
      ))}
      </ScrollView>
    );
}

const FoodInformation = (props) => (
  <View style={styles.namePriceWrapper}>
    <View style={styles.menuItemContainer}>
        <Text style={styles.foodName}>{props.food.title}</Text>
        <Text style={styles.foodDescription}>{props.food.description}</Text>
    </View>
    <View>
      <Text style={styles.foodPrice}>{props.food.price}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      margin: 20, 
      justifyContent: 'space-between',
    },
    namePriceWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: "95%",
    },
    menuItemContainer: {
      width: 240,
      justifyContent: "space-evenly",
    },
    foodName: {
      fontSize: 19,
      fontWeight: '600',
      marginBottom: 5,
    },
    foodPrice: {
      textAlign: "right",
    },
    foodDescription: {
      width: 325,
    },
    divider: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 22,
    }
  });