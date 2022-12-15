
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity, 
  ToastAndroid} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('toyo@email.com');
  const [password, setPassword] = useState('12345');

  const handleLogin = async (value) => {
    console.log('value',value);

    try {
      const res = await axios.post('http://172.20.10.2:3200/user/login',{
        email: value.email,
        password: value.password,
        nama : value.nama,
      });
      if (res.data.status === 200) {
        console.log('res', res.users)
        navigation.navigate('Homepage');
      await AsyncStorage.setItem('password', value.password);
      await AsyncStorage.setItem('email', value.email);
      await AsyncStorage.setItem('nama', res.data.users.nama);
      }
    } catch (error) {
      console.log(error.message);
      ToastAndroid.show('Login Failed', ToastAndroid.SHORT);
    }
  };

  //data input style 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <View style={styles.container1}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="white"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity 
        style={styles.button}
        onPress={async () => {
          await handleLogin({email, password});
        }}>
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