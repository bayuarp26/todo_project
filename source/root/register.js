import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Register = () => {  
  const navigation = useNavigation();
return (
    <View style={styles.container}>
      <Text style={styles.text}>Register</Text>
      <View style={styles.container1}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="white"
        />
        <TouchableOpacity onPress={() => navigation.navigate('loginScreen')}
        style={styles.button}>
          <Text style={styles.textButton}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.text2}>Already have an account? 
        <Text onPress={() => navigation.navigate('loginScreen')}
        style ={styles.sign}> Sign In</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container1: {
    width: '80%',
  },
  input: {
    backgroundColor: '#1B2430',
    width: '100%',
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
  },
   button: {
    backgroundColor: '#fff',
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  textButton: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text2: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
  sign: { 
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },

});

export default Register;
