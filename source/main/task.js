import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Task = () => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [parameter, setParameter] = React.useState('');
  const [date, setDate] = React.useState('');


  useEffect(() => {
    const getdata = async () => {
      try {
        const email = await AsyncStorage.getItem('email');
        const password = await AsyncStorage.getItem('password');
        const nama = await AsyncStorage.getItem('nama');
        if (email !== null && password !== null && nama !== null) {
          setEmail(email);
          setPassword(password);
          setNama(nama);
        }

      } catch (e) {
        console.log(e);
      }
    };
    getdata();
    return () => {};
  }, []);

  const task = async (value) => {
    console.log('value', value);
    try {
      





  const navigation = useNavigation();
  return (
    <ImageBackground source={require('../asset/addtask.jpg')} style={{width: '100%', height: '100%'}}>
    <View style={(styles.container)}>
      <Text style={styles.text}>Task</Text>
      <View style={styles.container1}>
        <Text style={styles.text1}>Task Name</Text>
        <Text style={styles.text1}>Description</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')}
        style={styles.button}>
          <Text style={styles.textButton}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex : 1,
    top : 20,
    color: '#706C61',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container1: {
    width: '80%',
  },
  input: {
    backgroundColor: '#1B2430',
    borderRadius: 10,
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1B2430',
    borderRadius: 10,
    height: 50,
    bottom: '40%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon : {
    flex : 1,
    left: 20,
    top: 20,
    color : '#fff',
  },
  text1 : {
    bottom : '100%',
    color : '#33313B',
    fontSize : 20,
    fontWeight : 'bold',
    marginBottom : 20,
  }
})

export default Task
