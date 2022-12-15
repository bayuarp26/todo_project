import { View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'


const homepage = () => {
  const navigation = useNavigation();
  return (
     <ImageBackground source={require('../asset/background.jpg')} style={{width: '100%', height: '100%'}}>
    <View style={(styles.container)}>
      <Text style={styles.text}>Homepage</Text>
      <View style={styles.container1}>
        <Text style={styles.text1}>Success isn't given it's earned</Text>
        <Text style={styles.text1}>- Michael Jordan</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Addtask')}
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
    flex : 1,
    top : 20,
    color: '#FFF6BF',
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
    color : '#FFF6BF',
    fontSize : 20,
    fontWeight : 'bold',
    marginBottom : 20,
  }
})

export default homepage
