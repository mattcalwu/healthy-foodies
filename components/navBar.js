import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'; 

export default function NavBar(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <NavButton name='home' text="Home" color={props.homeColor} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <NavButton name='user' text="Profile" color={props.profileColor} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
                <NavButton name='star' text="Favorites" color={props.favoriteColor} />
            </TouchableOpacity>
        </View>
    )
}

const NavButton = (props) => (
    <View>
        <FontAwesome name={props.name} size={30} color={props.color} style={styles.image} />
        <Text>{props.text}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 40,
      marginBottom: 12,
      marginTop: 12,
    },
    image: {
      marginBottom: 3,
      alignSelf: 'center',
    },
  });