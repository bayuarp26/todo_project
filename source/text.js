import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-vector-icons';
import { createStackNavigator } from 'react-navigation-stack';


  const Ynavigator = createStackNavigator({
    myday: {
      screen: myday,
      navigationOptions: {
        headerShown: false,
      },
    },
    task: {
      screen: task,
      navigationOptions: {
        headerShown: false,
      },
    },
    addtask: {
      screen: addtask,
      navigationOptions: {
        headerShown: false,
      },
    },
    important: {
      screen: important,
      navigationOptions: {
        headerShown: false,
      },
    },
    completed: {
      screen: completed,
      navigationOptions: {
        headerShown: false,
      },
    },
    settings: {
      screen: settings,
      navigationOptions: {
        headerShown: false,
      },
    },
    about: {
      screen: about,
      navigationOptions: {
        headerShown: false,
      },
    },
  })

  const myday = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>My Day</Text>
        <View style={styles.container1}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const task = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Task</Text>
        <View style={styles.container1}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const addtask = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Add Task</Text>
        <View style={styles.container1}>
          <TextInput
            style={styles.input}
            placeholder="Task Name"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            placeholder="Task Description"
            placeholderTextColor="white"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const important = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Important</Text>
        <View style={styles.container1}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const completed = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Completed</Text>
        <View style={styles.container1}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const settings = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Settings</Text>
        <View style={styles.container1}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const about = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>About</Text>
        <View style={styles.container1}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E1E1E',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container1: {
      flex: 1,
      backgroundColor: '#1E1E1E',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
    },
    textButton: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },  
    button: {
      backgroundColor: '#1E1E1E',
      width: 200,
      height: 50,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'white',
    },
    input: {
      backgroundColor: '#1E1E1E',
      width: 300,
      height: 50,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'white',
      color: 'white',
      margin: 10,
    },
  });


  export default Ynavigator;



