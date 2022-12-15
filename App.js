import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


import Login from './source/root/login'
import Register from './source/root/register'
import Homepage from './source/main/homepage'
import Todo from './source/main/Task'
import edit from './source/edit/edit'
import splashscreen from './source/root/splashscr'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tab.Navigator
      initialRouteName='homepage'
      tabBarOptions={{
        activeTintColor: '#e91e63',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
        }
      }}>
      <Tab.Screen
        name="homepage"
        component={Homepage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="todo"
        component={Todo}
        options={{
          tabBarLabel: 'Task',
          tabBarIcon: ({ color, size }) => (
            <Icon name="clipboard-text" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splashscreen" component={splashscreen} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="homepage" component={RootHome} />
        <Stack.Screen name="todo" component={Todo} />
        <Stack.Screen name="edit" component={edit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
