import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity,SafeAreaView, FlatList } from 'react-native';
import NavBar from "../components/NavBar";
const cuisines = [
  { id: 1, name: 'Italian' },
  { id: 2, name: 'Chinese' },
  { id: 3, name: 'Mexican' },
  { id: 4, name: 'Japanese' },
  { id: 5, name: 'Indian' },
];

export const ProfileScreen = ({ navigation }) => {

    const [restaurantsExplored, setRestaurantsExplored] = useState(0);

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
    <SafeAreaView style ={styles.container}>
    <ScrollView>
      {/* <View style={styles.headerContainer}>
        <Image
          style={styles.coverPhoto}
          source={{uri: 'https://www.bootdey.com/image/280x280/1E90FF/1E90FF'}}
        />
        <View style={styles.profileContainer}>
          <Image
            style={styles.profilePhoto}
            source={{uri: 'https://www.bootdey.com/img/Content/avatar/avatar1.png'}}
          />
          <Text style={styles.nameText}>Welcome, </Text>
        </View>
      </View> */}
    <Text style={styles.nameText}>Welcome, Bob</Text>

      {/* <View style={styles.bioContainer}>
      </View> */}
      <View style={styles.statsContainer}>

        <View style={styles.statContainer}>
          <Text style={styles.statCount}>Restaurants explored: {restaurantsExplored} </Text>
          {/* <Text style={styles.statLabel}>Restuarants Explored</Text> */}
        </View>

      </View>
      <View style={styles.preferencesContainer}>
            <Text style={styles.preferencesText}>Preferences:</Text>
    </View>
      <FlatList
        data={cuisines}
        renderItem={renderCuisine}
        keyExtractor={item => item.id.toString()}
        style={styles.cuisineList}
      />
   
    </ScrollView>
    <NavBar />
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
  },
  coverPhoto: {
    width: '100%',
    height: 200,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -50,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bioContainer: {
    padding: 15,
  },
  bioText: {
    fontSize: 16,
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
    alignItems: 'left',
    marginVertical: 5,
  },
  cuisineBackground: {
    backgroundColor: '#e5e5e5',
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
};

export default ProfileScreen;