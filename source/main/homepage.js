import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
// import Logo from '../assets/Oyaa.png'
// import Logo1 from '../assets/People.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const Homepage = () => {
  const navigation = useNavigation();

  const [title, setTitle] = React.useState('')
  const [desc, setDesc] = React.useState('')
  const [date, setDate] = React.useState('')

  const [data, setData] = useState({
    username: '',
    password: '',
    nama: '',
  })

  useEffect(() => {
    getData()
    return () => { }
  }, [])

  const getData = async () => {
    try {
      const username = await AsyncStorage.getItem('username')
      const response = await axios.get(`http://192.168.201.74:3200/users/${username}`)

      if (username !== null) {
        setData({
          id: response.data.id,
          username: username,
        })
      }
    } catch (e) {
      // error reading value
    }
  }

  const todo = async (value) => {
    console.log('value', value);
    try {
      const response = await axios.post('http://192.168.201.74:3200/todo', {
        title: value.title,
        desc: value.desc,
        date: value.date,
        status: 0,
        userid: data.id,
      })
      if (response.data.status == 200) {
        console.log('response', response)
        navigation.navigate('Todo')
        ToastAndroid.show("Tambah berhasil", ToastAndroid.SHORT)
      }
    } catch (e) {
      ToastAndroid.show("Tambah gagal", ToastAndroid.SHORT)
    }
  }

  return (

    <View style={styles.container}>
      <View style={styles.atas}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.text2}>Aulia Syaputri</Text>
        <Text style={styles.text2}>@MsQueeny</Text>
        <Text style={styles.text3}>TASK LIST</Text>
        <Image source={Logo1} style={styles.logo1} />

        <TouchableOpacity style={styles.icon}>
          <Icon name='arrow-left' color={'#fff'} size={25} onPress={() => navigation.goBack()} />
          <Text style={styles.out} onPress={() => navigation.navigate('SplashScreen')}>Log Out</Text>
          <Text
            style={{
              color: 'white',
              fontSize: 10,
              marginHorizontal: 90,
              marginLeft: -70,
              marginStart: 10,
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              bottom: 4
            }} onPress={() => navigation.goBack()}></Text>
        </TouchableOpacity>
      </View>

      <View>
        <TextInput
          style={styles.input2}
          placeholder="Judul :"
          placeholderTextColor="#1A3150"
          onChangeText={(title) => setTitle(title)}
          value={title}
        />
      </View>
      <View>
        <TextInput
          style={styles.input2}
          placeholder="Deskripsi :"
          placeholderTextColor="#1A3150"
          onChangeText={(desc) => setDesc(desc)}
          value={desc}
        />
      </View>

      <View>
        <TextInput
          style={styles.input2}
          placeholder="Tanggal :"
          placeholderTextColor="#1A3150"
          onChangeText={(date) => setDate(date)}
          value={date}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={async () => todo({ title, desc, date })}>
        <Text style={styles.textButtom}>Submit
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: 140,
    height: 148,
    top: 25,
    marginStart: 130,
  },
  logo1: {
    width: 270,
    height: 270,
    top: 15,
    marginStart: 160,
  },
  atas: {
    backgroundColor: '#1A3150',
    height: 250

  },
  input2: {
    width: 328,
    height: 50,
    borderWidth: 2,
    borderColor: '#749DD2',
    borderRadius: 15,
    color: '#000',
    paddingHorizontal: 20,
    top: 245,
    start: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    flexDirection: 'row',
    width: 300,
    height: 50,
    backgroundColor: '#FDCB5A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: 275,
    start: 45
  },
  textButtom: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },
  text1: {
    fontSize: 20,
    color: "#000",
    top: -100,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 20,
    color: "#fff",
    top: 40,
    fontWeight: 'bold',
    marginStart: 140,
  },
  text3: {
    fontSize: 20,
    color: "#000",
    top: 265,
    fontWeight: 'bold',
    marginStart: 35,
  },
  out: {
    fontSize: 20,
    color: "#fff",
    top: 2,
    fontWeight: 'bold',
    marginStart: 260,
  },
  icon: {
    flexDirection: 'row',
    marginTop: -470,
    marginStart: 25
  },
})
export default Homepage