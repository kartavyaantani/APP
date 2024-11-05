import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Ionicons } from '@expo/vector-icons';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
           <View style={styles.button}>
        <Text style={styles.title}>DigiRail</Text>
       </View>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.userInfoContainer}>
        <Text style={styles.userInfoText}>Name: John Doe</Text>
        <Text style={styles.userInfoText}>Age: 30</Text>
        <Text style={styles.userInfoText}>Number: 1234567890</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter PNR number"
        keyboardType="default"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enter Booking</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#E3F2FD', // Light blue background
  },
  logo: {
    width: 100,  // Adjust size as needed
    height: 100, // Adjust size as needed
    resizeMode: 'contain',
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A237E', // Dark blue text color
  },
  menuIcon: {
    marginRight: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#BBDEFB', // Light blue separator
  },
  userInfoContainer: {
    backgroundColor: '#BBDEFB', // Light blue container background
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },
  userInfoText: {
    fontSize: 16,
    color: '#0D47A1', // Darker blue text color
  },
  input: {
    height: 40,
    borderColor: '#90CAF9', // Light blue border
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#FFFFFF', // White input background
  },
  button: {
    backgroundColor: '#1E88E5', // Dark blue button color
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
