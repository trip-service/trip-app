import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import HomeScreen from '~/screens/HomeScreen';
import store, { persistor } from '~/store/configureStore';
import LightTheme from '~/themes/light.theme';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={LightTheme}>
      <NavigationContainer theme={LightTheme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                options={{ headerShown: false }}
                component={HomeScreen}
              />
            </Stack.Navigator>
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </PaperProvider>
  );
}
