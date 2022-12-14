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

const Register = () => {  
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [nama , setNama] = React.useState('');


        const [data, setData] = React.useState({
            email: '',
            password: '',
            nama: '',
            
        });

        useEffect(() => {
            getData();
          return () => { };
        }, []);


            const getData = async () => {
                try {
                    let email = await AsyncStorage.getItem('email');
                    let password = await AsyncStorage.getItem('password');
                    let nama = await AsyncStorage.getItem('nama');
                    if (email !== null && password !== null && nama !== null) {
                        setEmail(email);
                        setPassword(password);
                        setNama(nama);
                    }
                } catch (e) {
                    console.log(e);
                }
              ;
            };
          const register = async (value) => {
            console.log('value',value);
            try {
              const res = await axios.post('http://192.168.100.10:3200/user',{
                email: value.email,
                password: value.password,
                nama: value.nama,
              });
              if (res.data.status == 200 ) {
                console.log('res',res);
                ToastAndroid.show('Register Success', ToastAndroid.SHORT);
              }
            } catch (error) {
              console.log(error.message);
              ToastAndroid.show('Register Failed', ToastAndroid.SHORT);
            }
          }
  

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register</Text>
      <View style={styles.container1}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          inputPlaceholderTextColor="white"
          placeholderTextColor="white"
          onChangeText={(email) => setEmail(email)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="nama"
          inputPlaceholderTextColor="white"
          placeholderTextColor="white"
          onChangeText={(nama) => setNama(nama)}
          value={nama}
        />
        <TextInput
          style={styles.input}
          placeholder="Input Password"
          inputPlaceholderTextColor="white"
          placeholderTextColor="white"
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
        <TouchableOpacity 
        style={styles.button}
        onPress={async () => {
          navigation.navigate('loginScreen');
          if (email == " " || password == " " || nama == " ") {
            ToastAndroid.show('Please fill all the fields', ToastAndroid.SHORT);
          } else {
            register ({ email, password, nama });
        }
        }}>
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
