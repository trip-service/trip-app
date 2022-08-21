import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '~/screens/LoginScreen';

const NonAuthStack = createNativeStackNavigator();

const NonAuthRoutes = () => {
  return (
    <NonAuthStack.Navigator>
      <NonAuthStack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
    </NonAuthStack.Navigator>
  );
};

export default NonAuthRoutes;
