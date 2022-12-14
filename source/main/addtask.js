import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Addtask = () => {
  const [title , setTitle] = React.useState('');
  const [description , setDescription] = React.useState('');
  const [parameter , setParameter] = React.useState('');
  const [date , setDate] = React.useState('');

  useEffect (() => {
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
    return () => { };
  }, []);

const addtask = async (value) => {
  console.log('value',value);
  try {
    const res = await axios.post('http://192.168.100.10:3200/todo',{
      title: value.title,
      description: value.description,
      parameter: value.parameter,
      date: value.date,
    });
    if (res.data.status == 200 ) {
      console.log('res',res);
      ToastAndroid.show('Add Task Success', ToastAndroid.SHORT);
    }
  } catch (e) {
    console.log(e);
  }
};



  const navigation = useNavigation();
  return (
   <ImageBackground source={require('../asset/addtask.jpg')} style={{width: '100%', height: '100%'}}>
   <View style={(styles.container)}>
      <Text style={styles.text}>Add Task</Text>
      <View style={styles.container1}>
        <TextInput
          style={styles.input}
          placeholder="Task Name"
          placeholderTextColor="white"
          onChangeText={(title) => setTitle(title)}
          value={title}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          placeholderTextColor="white"
          onChangeText={(description) => setDescription(description)}
          value={description}
        />
        <TextInput
          style={styles.input}
          placeholder="Parameter"
          placeholderTextColor="white"
          onChangeText={(parameter) => setParameter(parameter)}
          value={parameter}
        />
        <TextInput
          style={styles.input}
          placeholder="Date"
          placeholderTextColor="white"
          onChangeText={(date) => setDate(date)}
          value={date}
        />
        <TouchableOpacity 
        style={styles.button}
        onPress={async () => {
          if (title == " " || description == " " || parameter == " " || date == " ") {
            ToastAndroid.show('Please fill all the field', ToastAndroid.SHORT);
          } else {
            addtask({ title, description, parameter, date });
        }}
      }>
          <Text style={styles.textButton}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};


    const styles = StyleSheet.create({
      container: {
        flex: 1,
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
        backgroundColor: '#1B2430',
        borderRadius: 10,
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      textButton: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
      },
    }
    )
export default Addtask