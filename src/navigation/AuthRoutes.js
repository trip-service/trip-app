import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import HomeScreen from '~/screens/HomeScreen';

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
      </AuthStack.Navigator>
    );
  };
  
  export default AuthRoutes;
  