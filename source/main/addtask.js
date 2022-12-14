import { View, Text, TouchableOpacity, StyleSheet, TextInput, ImageBackground} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const addtask = () => {
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
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Parameter"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Date"
          placeholderTextColor="white"
        />
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')}
        style={styles.button}>
          <Text style={styles.textButton}>Add Task</Text>
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
        borderRadius: 10,
        height: 50,
        width: '100%',
        marginBottom: 20,
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
export default addtask