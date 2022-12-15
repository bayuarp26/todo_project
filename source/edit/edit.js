import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Edit = () => {
  const navigation = useNavigation()
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [date, setDate] = useState('')

  const [data, setData] = useState({
    title: '',
  })

  useEffect(() => {
    getData()
    return () => { }
  }, [])

  const getData = async () => {
    try {
      const title = await AsyncStorage.getItem('title')
      const response = await axios.get(`http://192.168.201.74:3200/todo/update/${title}`)

      if (title !== null) {
        setData({
          title: title,
          desc: response.data.desc,
          date: response.data.date,
        })
      }
    } catch (e) {
      // error reading value
    }
  }

  const tambah = async (value) => {
    console.log('value', value)

    try {
      const response = await axios.put('http://192.168.201.74:3200/todo/', {
        title: data.title,
        desc: value.desc,
        date: value.date,
      })

      if (response.data.status == 200) {
        console.log('response', response.data)
        navigation.replace('Todo')
        ToastAndroid.show("Successful update todo", ToastAndroid.SHORT)
      }
    } catch (e) {
      ToastAndroid.show("Failed update todo", ToastAndroid.SHORT)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EDIT TODO</Text>

      <Text style={styles.label}>Judul</Text>
      <View style={styles.center}>
        <TextInput
          style={[styles.input]}
          placeholder='Enter your title'
          placeholderTextColor='#fff'
          onChangeText={(title) => setTitle(title)}
          value={data.title}
        />
      </View>

      <Text style={styles.label}>Deskripsi</Text>
      <View style={styles.center}>
        <TextInput
          style={[styles.input]}
          placeholder='Enter your desc'
          placeholderTextColor='#fff'
          onChangeText={(desc) => setDesc(desc)}
          value={desc}
        />
      </View>

      <Text style={styles.label}>Tanggal</Text>
      <View style={styles.center}>
        <TextInput
          style={[styles.input]}
          placeholder='Enter your due date'
          placeholderTextColor='#fff'
          onChangeText={(date) => setDate(date)}
          value={date}
        />
      </View>

      <View style={styles.center}>
        <TouchableOpacity
          style={styles.btn_submit}
          onPress={async () => {
            if (desc == '' || date == '') {
              ToastAndroid.show("Data tidak boleh kosong", ToastAndroid.SHORT)
            } else {
              tambah({ desc: desc, date: date })
            }
          }}
        >
          <Text style={styles.txt_submit}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDCB5A',
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginTop: 41,
    marginBottom: 28,
    marginLeft: 120,
  },

  label: {
    color: '#F8F8F8',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginLeft: 24,
    marginTop: 25,
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#1D1D1D',
    color: '#fff',
    borderColor: '#979797',
    width: 312,
    height: 40,
    fontSize: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 4,
  },

  btn_submit: {
    backgroundColor: "#8875FF",
    alignItems: "center",
    width: 312,
    height: 40,
    borderRadius: 4,
    marginTop: 53,
  },

  txt_submit: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    padding: 9,
  },

  txt_signin: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginTop: 16,
  },
})

export default Edit