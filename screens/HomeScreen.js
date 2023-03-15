import React, { useState } from 'react';
import { Button, Text, TextInput, StyleSheet, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    console.log(`Searching for ${searchValue}`);
    // Add your search logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ZotFoods</Text>
      <Text style={styles.subtitle}>Get personalized food recommendations based on your preferences.</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for cuisine"
        onChangeText={setSearchValue}
        onSubmitEditing={handleSearch}
        value={searchValue}
      />
      <Button
        title="Go to Login Page" 
        onPress={() => {
            navigation.navigate("Login")
        }}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 32,
  },
  searchBar: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 20,
  },

  image: {
    width: '100%',
    height: '30%',
    marginTop: 20,
  },
});

export default HomeScreen;