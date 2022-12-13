import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


import splashScreen from './source/root/splashscr';
import loginScreen from './source/root/login';
import registerScreen from './source/root/register';

import homeScreen from './source/main/homepage';
import Myday from './source/main/myday';
import Task from './source/main/task';
import important from './source/main/important';
import completed from './source/main/completed';
import addTask from './source/main/addtask'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarshowLabel: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1B2430',
        },
        }}>
      <Tab.Screen
        name="Homepage"
        component={homeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Myday"
        component={Myday}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="calendar" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Task"
        component={Task}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="tasks" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="important"
        component={important}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="star" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="completed"
        component={completed}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="check" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

       

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splashScreen">
        <Stack.Screen name="splashScreen" component={splashScreen} options={{headerShown: false}} />
        <Stack.Screen name="loginScreen" component={loginScreen} options={{headerShown: false}} />
        <Stack.Screen name="registerScreen" component={registerScreen} options={{headerShown: false}} />
        <Stack.Screen name="RootHome" component={RootHome} options={{headerShown: false}} />
        <Stack.Screen name="Homepage" component={homeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Myday" component={Myday} options={{headerShown: false}} />
        <Stack.Screen name="Task" component={Task} options={{headerShown: false}} />
        <Stack.Screen name="important" component={important} options={{headerShown: false}} />
        <Stack.Screen name="completed" component={completed} options={{headerShown: false}} />
        <Stack.Screen name="addTask" component={addTask} options={{headerShown: false}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
