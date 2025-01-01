  // import React, { useState } from 'react';
  // import { StatusBar } from 'expo-status-bar';
  // import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

  // export default function App() {
  //   const [username, setUsername] = useState('');
  //   const [password, setPassword] = useState('');

  //   const handleLogin = () => {
  //     // Simple login logic (you can replace this with your backend API call)
  //     if (username === 'admin' && password === 'admin') {
  //       Alert.alert('Login Successful', 'Welcome back!');
  //     } else {
  //       Alert.alert('Login Failed', 'Invalid username or password.');
  //     }
  //   };

  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.title}>Login</Text>
  //       <TextInput
  //         style={styles.input}
  //         placeholder="Username"
  //         value={username}
  //         onChangeText={setUsername}
  //       />
  //       <TextInput
  //         style={styles.input}
  //         placeholder="Password"
  //         secureTextEntry
  //         value={password}
  //         onChangeText={setPassword}
  //       />
  //       <TouchableOpacity style={styles.button} onPress={handleLogin}>
  //         <Text style={styles.buttonText}>Login</Text>
  //       </TouchableOpacity>
  //       <StatusBar style="auto" />
  //     </View>
  //   );
  // }

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: '#f5f5f5',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     padding: 20,
  //   },
  //   title: {
  //     fontSize: 24,
  //     fontWeight: 'bold',
  //     marginBottom: 20,
  //   },
  //   input: {
  //     width: '100%',
  //     height: 50,
  //     borderColor: '#ccc',
  //     borderWidth: 1,
  //     borderRadius: 8,
  //     paddingHorizontal: 10,
  //     marginBottom: 15,
  //     backgroundColor: '#fff',
  //   },
  //   button: {
  //     width: '100%',
  //     height: 50,
  //     backgroundColor: '#007bff',
  //     borderRadius: 8,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //   buttonText: {
  //     color: '#fff',
  //     fontSize: 16,
  //     fontWeight: 'bold',
  //   },
  // });


  import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

