import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faCalendar, faWandMagicSparkles, faFire, faPenToSquare, faObjectGroup  } from '@fortawesome/free-solid-svg-icons'




import splashScreen from './source/root/splashscr';
import loginScreen from './source/root/login';
import registerScreen from './source/root/register';

import homeScreen from './source/main/Homepage';
import Myday from './source/main/Myday';
import Task from './source/main/Task';
import important from './source/main/Important';
import completed from './source/main/Completed';
import addTask from './source/main/Addtask'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarshowLabel: false,
        tabBarActiveTintColor: '#4B56D2',
        tabBarInactiveTintColor: '#495579',
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
            <FontAwesomeIcon icon={faHouse} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Myday"
        component={Myday}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faCalendar} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Task"
        component={Task}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faPenToSquare} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="important"
        component={important}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faFire} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="completed"
        component={completed}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faWandMagicSparkles} color={color} size={20} />
          ),
        }}
        />
        <Tab.Screen
        name="Addtask"
        component={addTask}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faObjectGroup}color={color} size={20} />
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
        <Stack.Screen name="Homepage" component={RootHome} options={{headerShown: false}} />
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
