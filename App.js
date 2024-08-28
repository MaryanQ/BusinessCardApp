import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'data:image/png;base64,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' }}
        style={styles.profilePic}
      />
      <Text style={styles.name}>Alisa Sarr</Text>
      <Text style={styles.title}>Software Engineer</Text>
      <View style={styles.divider} />
      <View style={styles.contactRow}>
        <Ionicons name="mail" size={20} color="gray" />
        <Text style={styles.contact}>AlisaSarr@hotmail.com</Text>
      </View>
      <View style={styles.contactRow}>
        <Ionicons name="call" size={20} color="gray" />
        <Text style={styles.contact}>+004560554433</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginTop:160
  },
 profilePic: {
    width: 260, 
    height: 60, 
    borderRadius: 10, 
    marginBottom: 20,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: 'gray',
    marginBottom: 20,
  },
  divider: {
    width: '80%',
    height: 1,
    backgroundColor: '#ced4da',
    marginVertical: 20,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contact: {
    fontSize: 18,
    marginLeft: 10,
  },
});
