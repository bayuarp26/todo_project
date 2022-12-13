
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
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
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')}
        style={styles.button}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.text2}>Don't have an account? 
        <Text onPress={() => navigation.navigate('registerScreen')}
        style ={styles.sign}> Sign Up</Text>
        </Text>
      </View>
    </View>

  )
}

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
    paddingHorizontal: 15,
    color: '#fff',
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
    marginBottom: 10,
  },
  text3: {
    color: '#fff',
    fontSize: 15,
  },
  sign: { 
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },

})


export default login