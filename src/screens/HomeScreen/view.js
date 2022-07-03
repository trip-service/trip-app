// In index.js of a new project
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import AccountHomeScreen from '~/screens/AccountHomeScreen';
import ListHomeScreen from '~/screens/ListHomeScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="view-day-outline"
              size={size}
              color={color}
            />
          ),
        }}
        name="List"
        component={ListHomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="account-circle" size={size} color={color} />
          ),
        }}
        name="Account"
        component={AccountHomeScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
