import React from 'react';
import RootNavigation from './App/navigation/RootNavigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {StatusBar} from 'react-native';
import rootReducer from './App/Store/reducer/index';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const App = () => {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['booksReducer'],
  };
  const persitedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persitedReducer, applyMiddleware(ReduxThunk));
  const persistedStore = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="#1E1B26"
        />
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
