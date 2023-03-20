import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native'; 

export default function NavBar() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <NavButton icon='home' text="Home" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <NavButton icon='user' text="Profile" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
                <NavButton icon='star' text="Favorites" />
            </TouchableOpacity>
        </View>
    )
}

const NavButton = (props) => (
    <View>
        <FontAwesome5 name={props.icon} size={30} style={styles.image} />
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