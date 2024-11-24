import React, { useState } from 'react'; 
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const ManageUser = () => {
  const navigation = useNavigation();
  
  const [birthday, setBirthday] = useState(''); 
  const [status, setStatus] = useState(''); 
  const [location, setLocation] = useState(''); 
  const [interest, setInterest] = useState(''); 

  
  const handleSaveChanges = () => {
    const updatedUserData = {
      birthday: birthday, 
      status: status,     
      location: location, 
      interest: interest, 
    };

    router.navigate('Profile', { updatedUserData });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage User</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Birthday:</Text>
        <TextInput
          style={styles.input}
          value={birthday}
          onChangeText={setBirthday}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Status:</Text>
        <TextInput
          style={styles.input}
          value={status}
          onChangeText={setStatus}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Location:</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Interest:</Text>
        <TextInput
          style={styles.input}
          value={interest}
          onChangeText={setInterest}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  saveButton: {
    backgroundColor: '#f4c2c2',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default ManageUser;
