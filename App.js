import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Post from './Screens/Post';
import Account from './Screens/Account';
import Compass from './Screens/Compass';
import Notification from './Screens/Notification';
import { colors } from './Colors';
import { MaterialCommunityIcons, AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return <AntDesign name='home' size={size} color={color} />;
            } else if (route.name === 'Compass') {
              return <FontAwesome5 name="compass" size={size} color={color} />;
            } else if (route.name === 'Notification') {
              return <Entypo name="notification" size={size} color={color} />;
            } else if (route.name === 'Account') {
              return <MaterialCommunityIcons name="account-circle-outline" size={size} color={color} />
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.primariy,
          inactiveTintColor: colors.black,
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Compass" component={Compass} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}