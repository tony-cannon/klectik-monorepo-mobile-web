import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import React from 'react';
import { Provider } from 'react-redux';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: []
}

export const rootReducers = combineReducers({
  // Add reducers here
})

const persistedReducer = persistReducer(persistConfig, rootReducers);

const createStore = () => {
  const reduxStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

  setupListeners(reduxStore.dispatch);

  return reduxStore;
};

interface ReduxProviderProps {
  children?: React.ReactNode;
}

export const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  return <Provider store={createStore()}>{children}</Provider>;
};
