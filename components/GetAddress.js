import React from "react";
import { Alert, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Clipboard from '@react-native-clipboard/clipboard';


export default function GetAddress(props) {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => {Clipboard.setString(props.address), alert("Clipped!")}}>
                    <Text style={styles.text}>Get Address</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      flexDirection: "row",
    },
    buttonContainer: {
      flexDirection: 'row',
      width: "100%",
      justifyContent: 'center',
    },
    button: {
      paddingTop: 5,
      backgroundColor: "#00C2FF",
      alignItems: "center",
      borderRadius: 10,
      width: 180,
      height: 40,
      position: "relative",
    },
    text: {
      color: "white",
      fontSize: 20,
    },
  });