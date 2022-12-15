import React from 'react';
import { Animation, View, Text, StyleSheet, Image } from 'react-native'
import {navigation} from '@react-navigation/native'


//asset 

import Logo from '../asset/main_logo.png'

//main source
const splashscr = ({navigation}) => {
    setTimeout(() => {
        navigation.replace('login')
    }, 3000);

return (
  <View style={styles.container}>
    <Image source={Logo} style={styles.logo}/>
    <Text style={styles.text_main}>
      To Do List
    </Text>
      <Text style={styles.text_bottom}>
        Wahyu Pratomo - react app
        </Text>    
      </View>
  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#1B2430',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 150,
    height: 150,
  },

  text_bottom: {
    color: '#fff',
    position: 'absolute',
    bottom: 30,
    fontStyle : 'lato',
    fontSize: 15,
    marginTop: 20,
  },

  text_main: {
    color: '#fff',
    position: 'absolute',
    bottom : 280,
    fontStyle : 'oswald',
    fontSize: 30,
    marginTop: 20,
  },


  
})

export default splashscr