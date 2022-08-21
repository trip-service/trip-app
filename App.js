import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SwitchRoute from '~/navigation/SwitchRoute';
import store, { persistor } from '~/store/configureStore';
import LightTHeme from '~/themes/light.theme';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider theme={LightTHeme}>
            <SwitchRoute />
          </PaperProvider>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
