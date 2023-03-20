import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native'; 

export default function NavBar() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Icon icon='home' text="Home" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Icon icon='user' text="Profile" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
                <Icon icon='star' text="Favorites" />
            </TouchableOpacity>
        </View>
    )
}

const Icon = (props) => (
    <View>
        <FontAwesome5 name={props.icon} size={25} style={styles.unknown1} />
        <Text>{props.text}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      margin: 10, 
      marginHorizontal: 30,
      justifyContent: 'space-between',
    },
    unknown1: {
      marginBottom: 3,
      alignSelf: 'center',
    },
  });