import React from "react";
import { Alert, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Clipboard from '@react-native-clipboard/clipboard';


export default function GetAddress(props) {
    const {address} = props.route.params;
    return (
        <View style={styles.container}>
            <View style={styles.unknown1}>
                <TouchableOpacity style={styles.button} onPress={() => {Clipboard.setString(address), alert("Clipped!")}}>
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
      position: "absolute",
      bottom: 130,
      zIndex: 999,
    },
    unknown1: {
      flexDirection: 'row',
      width: "100%",
      justifyContent: 'center',
    },
    button: {
      marginTop: 200,
      paddingTop: 10,
      backgroundColor: "#00C2FF",
      alignItems: "center",
      borderRadius: 10,
      width: 200,
      height: 50,
      position: "relative",
    },
    text: {
      color: "white",
      fontSize: 20,
    },
  });