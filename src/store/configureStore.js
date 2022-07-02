import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import {
  startFetchingMiddleware,
  stopFetchingMiddleware,
} from '~/middlewares/fetchHandlerMiddleware';
import { snackbarHandlerMiddleware } from '~/middlewares/snackbarHandlerMiddleware';
import rootReducer from '~/reducers';
import rootSaga from '~/sagas';

const persistConfig = {
  key: 'storeCache',
  storage: AsyncStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware({});
  const middlewares = [
    startFetchingMiddleware,
    sagaMiddleware,
    stopFetchingMiddleware,
    snackbarHandlerMiddleware,
  ];

  const store = createStore(
    persistedReducer,
    compose(applyMiddleware(...middlewares))
  );

  const persistor = persistStore(store);
  // eslint-disable-next-line no-undef
  if (__DEV__) {
    // eslint-disable-next-line no-undef
    module.hot.accept(() => {
      // eslint-disable-next-line no-undef
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
    });
  }
  return {
    persistor,
    store: {
      ...store,
      runSaga: sagaMiddleware.run(rootSaga),
    },
  };
};

const { store, persistor } = configureStore();

export { persistor };
export default store;
