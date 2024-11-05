import React, { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, Text, Pressable, Modal, StyleSheet, TextInput, Alert } from 'react-native';
import { Link, Tabs } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login button press with hardcoded validation
  const handleLogin = () => {
    if (userId === 'Admin' && password === '1234') {
      setIsLoggedIn(true);
      setShowLoginModal(false);
    } else {
      Alert.alert('Invalid Credentials', 'Please enter the correct User ID and Password.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Modal
        transparent={true}
        animationType="slide"
        visible={showLoginModal}
        onRequestClose={() => setShowLoginModal(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Please log in to continue</Text>
            
            {/* User ID Input */}
            <Text style={styles.label}>User ID</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter User ID"
              value={userId}
              onChangeText={setUserId}
            />
            
            {/* Password Input */}
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
            
            <Pressable style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {isLoggedIn && (
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            headerShown: useClientOnlyValue(false, true),
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: 'Face Recognize',
              tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
              headerRight: () => (
                <Link href="/modal" asChild>
                  <Pressable>
                    {({ pressed }) => (
                      <FontAwesome
                        name="info-circle"
                        size={25}
                        color={Colors[colorScheme ?? 'light'].text}
                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                      />
                    )}
                  </Pressable>
                </Link>
              ),
            }}
          />
          <Tabs.Screen
            name="three"
            options={{
              title: 'Dashboard',
              tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
              headerRight: () => (
                <Link href="/modal" asChild>
                  <Pressable>
                    {({ pressed }) => (
                      <FontAwesome
                        name="info-circle"
                        size={25}
                        color={Colors[colorScheme ?? 'light'].text}
                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                      />
                    )}
                  </Pressable>
                </Link>
              ),
            }}
          />
        </Tabs>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: Colors.light.tint,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
