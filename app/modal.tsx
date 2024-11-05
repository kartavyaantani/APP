import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function ModalScreen() {
  const handleButtonPress = (buttonName: string) => {
    console.log(`${buttonName} button pressed`);
    // You can add navigation or logic for each button here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Options</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Previous trips')}>
        <Text style={styles.buttonText}>Previous trips</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Feedback')}>
        <Text style={styles.buttonText}>Feedback</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('FAQ')}>
        <Text style={styles.buttonText}>FAQ</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('HELP')}>
        <Text style={styles.buttonText}>HELP</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={() => handleButtonPress('Logout')}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
    backgroundColor: '#ccc',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#FF3B30', // Red color for the logout button
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 30,
    width: '80%',
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
