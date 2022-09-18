import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import TripDetailScreen from '~/screens/TripDetailScreen';
import CreateTripNodeModalScreen from '~/screens/CreateTripNodeModalScreen';

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={TripDetailScreen}
        />
        <AuthStack.Group screenOptions={{ presentation: "modal" }}>
        <AuthStack.Screen
          name="CreateTripNodeModal"
          component={CreateTripNodeModalScreen}
          options={{
            title: "新增詳細行程",
          }}
        />
        </AuthStack.Group>
      </AuthStack.Navigator>
    );
  };
  
  export default AuthRoutes;
  