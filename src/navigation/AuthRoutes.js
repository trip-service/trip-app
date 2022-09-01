import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import TripDetailScreen from '~/screens/TripDetailScreen';

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={TripDetailScreen}
        />
      </AuthStack.Navigator>
    );
  };
  
  export default AuthRoutes;
  