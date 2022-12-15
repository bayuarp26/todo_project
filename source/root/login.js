import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// import Logo from '../assets/Logo.png'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const App = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('Chopper');
  const [password, setPassword] = useState('123');

  const handleLogin = async (value) => {
    try {
      const data = await axios.get('http://192.168.201.74:3200/users/' + username)
      const response = await axios.post('http://192.168.201.74:3200/users/login', {
        username: value.username,
        password: value.password
      })
      if (response.data.status == 200) {
        console.log('response', response.data)
        navigation.navigate('Homepage')

        await AsyncStorage.setItem('password', value.password)
        await AsyncStorage.setItem('username', value.username)
        await AsyncStorage.setItem('nama', data.data.nama)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <View style={styles.container}>
      {/* <Image source={Logo} style={styles.logo} /> */}
      <Text
        style={{
          color: 'white',
          fontSize: 30,
          marginBottom: 20,
          fontWeight: "bold",
          top: -200,
        }}>
        Welcome Back!
      </Text>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          marginBottom: 20,
          top: -200,
        }}>
        Let's help you meet your tasks
      </Text>
      <Text
        style={{
          color: 'white',
          fontSize: 30,
          marginBottom: 20,
          fontWeight: "bold",
        }}>
        TODO LIST
      </Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="white"
          onChangeText={(username) => setUsername(username)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          value={password}

        />
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            await handleLogin({ username, password });
          }}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Don't have an account?
        
          <Text
            style={{ fontWeight: 'bold' }}
            onPress={() => navigation.navigate('RegisterScreen')}
          > Sign Up</Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dd42f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 155,
    height: 170,
    top: 85,
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: '#ffff',
    borderRadius: 25,
    color: '#8142f5',
    paddingHorizontal: 25,
    marginBottom: 20,
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: '#8142f5',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#ffff',
    fontSize: 25,
    fontWeight: "bold"
    
  },
  text: {
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
  },
})

export default App