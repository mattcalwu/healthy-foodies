// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { TextInput } from 'react-native-web';
// import { update, ref, set, onValue } from "firebase/database";
// import { db } from './configFirebase';


// export default function ManualRegistration() {

//   const [userName, setName] = useState('')
//   const [email, setEmail] = useState('')
//   function create () {
//     // const newKey = push(child(ref(database), 'users')).key;
//     set(ref(db, 'users/' + userName), {
//       username: userName,
//       email: email
//       }).then(() => {
//         alert('data uploaded');
//       }).catch((error) => {
//         alert('error');
//       });
//   };

//   function update () {
//     // const newKey = push(child(ref(database), 'users')).key;
//     update(ref(db, 'users/' + userName), {
//       username: userName,
//       email: email
//       }).then(() => {
//         alert('data uploaded');
//       }).catch((error) => {
//         alert('error');
//       });
//   };

//   function readData() {
//     const starCountRef = ref(db, 'users/' + userName);
//     onValue(starCountRef, (snapshot) => {
//       const data = snapshot.val();
//       setEmail(data.email);
//     });
//   }

//   return (
//     <View style={styles.container}>
//       <Text>Firebase crud!</Text> 
//       <TextInput value={userName} onChangeText={(userName) => {setName(userName)}} placeholder="Username" style={styles.textBoxes}></TextInput>
//       <TextInput value={email} onChangeText={(email) => {setEmail(email)}} placeholder="Email" style={styles.textBoxes}></TextInput>
//       <button onClick={readData}>Submit Data</button>

//     </View>
//   );  
// }

// const styles = StyleSheet.create({
//   container: {  
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textBoxes: {
//     width: '90%', 
//     fontSize: 18,
//      padding: 12,
//       borderColor: 'gray', 
//     borderWidth: 0.2,
//      borderRadius: 10
//   }   
// });