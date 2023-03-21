import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity,SafeAreaView, FlatList } from 'react-native';
import NavBar from "../components/NavBar";
import { Divider } from 'react-native-elements';
const cuisines = [
  { id: 1, name: 'Italian' },
  { id: 2, name: 'Chinese' },
  { id: 3, name: 'Mexican' },
  { id: 4, name: 'Japanese' },
  { id: 5, name: 'Indian' },
];

export const ProfileScreen = ({ navigation }) => {

    const [restaurantsExplored, setRestaurantsExplored] = useState(5);

    const renderCuisine = ({ item }) => (
        <View style={styles.cuisineContainer}>
          <View style={styles.cuisineBackground}>
            <Text style={styles.cuisineName}>{item.name}</Text>
            <TouchableOpacity>

            <Image
                style={styles.trashIcon}
                source={{uri: 'https://freesvg.org/img/trash.png'}}/>
            </TouchableOpacity>
          </View>
        </View>
      );
      

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.nameText}>Welcome, Bob</Text>
        <Divider width={1.9} color={"#C9C9C9"} />
          <View style={styles.statsContainer}>
            <View style={styles.statContainer}>
              <Text style={styles.statCount}>Restaurants explored: {<Text style={styles.statsWrapper}>{restaurantsExplored}</Text>} </Text>
            </View>
          </View>
          <Divider width={1.9} color={"#C9C9C9"} />
          <View style={styles.preferencesContainer}>
            <Text style={styles.preferencesText}>Preferences:</Text>
          </View>
          <FlatList
            data={cuisines}
            renderItem={renderCuisine}
            keyExtractor={item => item.id.toString()}
            style={styles.cuisineList}
          />
      </View>
      <View style={styles.navBarContainer}>
        <NavBar homeColor="grey" profileColor="black" favoriteColor="grey" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  subContainer: {
    paddingHorizontal: 15,
  },
  headerContainer: {
    alignItems: 'center',
  },
  nameText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  statContainer: {
    alignItems: 'center',
    flex: 1,
  },
  statCount: {
    fontSize: 20,
    fontWeight: 'light',
  },
  statsWrapper: {
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
    padding: 5,
  },
  statLabel: {
    fontSize: 16,
    color: '#999',
  },
  button: {
    backgroundColor: '#0066cc',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  preferencesContainer: {
    marginVertical: 10,
  },
  preferencesText: {
    fontSize: 18,
    fontWeight: 'light',
  },
  cuisineContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },
  cuisineBackground: {
    backgroundColor: '#D9D9D9',
    width: "90%",
    borderRadius: 8,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cuisineName: {
    fontSize: 16,
  },  
  trashIcon:{
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginLeft: 'auto'
  },
  navBarContainer: {
    marginTop: 295,
  }
});

export default ProfileScreen;