import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const completed = () => {
  const navigation = useNavigation();
  return (
    <View style={(styles.container)}>
      <Text style={styles.text}>Completed</Text>
      <View style={styles.container1}>
        <Text style={styles.text}>Task Name</Text>
        <Text style={styles.text}>Description</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')}
        style={styles.button}>
          <Text style={styles.textButton}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default completed