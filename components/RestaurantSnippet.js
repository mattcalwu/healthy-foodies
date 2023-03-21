import React from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Divider, Rating } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Clipboard from "@react-native-clipboard/clipboard";
import { getDatabase, ref, set, onValue, push, child } from "firebase/database";


const yelpRestaurantInfo = {
  name: "Amon Gus's German Weinerschnitzels",
  image:
    "https://cdn.discordapp.com/attachments/400503489546944512/1079457290618404884/F8E23EE3-7747-4844-80B6-892ADE44324B.jpg",
  price: "$",
  reviews: "244",
  rating: 3.5,
  distance: 5.5,
  categories: [
    {
      title: "German",
    },
    {
      title: "Fast Food",
    },
  ],
};

export default function RestaurantSnippet(props) {
  const { name, image, address, categories, userIDNum } = props.route.params;
  const restaurantCategories = categories.map((cat) => (
    <Text style={styles.categoriesWrapper}>{cat.title}</Text>
  ));

  function readData() {
    const db = getDatabase();
    const tasksRef = ref(db, "Users/"+userId.userID);
    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      console.log("data", data);
      // updateStarCount(postElement, data);
    });
    // return 0;
  }
  function writeUserData(userId, stuff) {
    console.log(stuff)
    const db = getDatabase();
    const tasksRef = ref(db, "Users/"+userId.userID);
    // var playersRef = firebase.database().ref("Users/");
    push(tasksRef, 
      stuff);
    console.log("Sent");
  }

  const navigation = useNavigation();
  return (
    <View>
      <View>
        <Image source={{ uri: image }} style={styles.snippetImage} />
        <TouchableOpacity
          style={{ position: "absolute", right: 25, top: 15 }}
          onPress={() => navigation.navigate("Home")}
        >
          <MaterialIcons
            name="cancel"
            size={32}
            color="red"
            style={styles.cancelButton}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.snippetTitle}>{name}</Text>
        <TouchableOpacity
          style={styles.AddressButton}
          onPress={() => {
            console.log(address)
            console.log("CATEGORY OF PLACE FUCKER:", userIDNum)
            writeUserData(userIDNum, categories)
            Clipboard.setString(address);
            alert("Clipped!");
          }}
        >
          <GetAddressButton style={styles.AddressButtonWrapper} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.snippetDescription}>{restaurantCategories}</Text>
      </View>
    </View>
  );
}

const GetAddressButton = (props) => (
  <View style={styles.AddressContainer}>
    <View style={styles.AddressButtonContainer}>
      <Text style={styles.AddressText}>Get Address</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    marginHorizontal: 30,
    justifyContent: "space-between",
  },
  categoriesWrapper: {
    textAlign: "center",
    color: "white",
    backgroundColor: "#ADADAD",
    borderRadius: 10,
    paddingHorizontal: 8,
    marginHorizontal: 2,
  },
  snippetImage: {
    width: "100%",
    height: 180,
  },
  headerContainer: {
    width: "90%",
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  AddressButtonWrapper: {
    textAlign: "right",
  },
  snippetTitle: {
    flex: 1,
    flexWrap: "wrap",
    textAlign: "left",
    fontSize: 29,
    fontWeight: "600",
    marginTop: 4,
    marginHorizontal: 15,
    width: "100%",
  },
  snippetDescription: {
    marginTop: 8,
    marginHorizontal: 15,
    fontSize: 15.5,
    fontWeight: "400",
  },
  AddressContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  AddressButtonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  AddressButton: {
    paddingVertical: 5,
    backgroundColor: "#00C2FF",
    alignItems: "center",
    borderRadius: 10,
    width: 150,
    height: 30,
    position: "relative",
  },
  AddressText: {
    color: "white",
    fontSize: 16,
  },
});
