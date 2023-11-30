import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./counterSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, counterReducer)
export const Store = configureStore ({
  reducer :{
    counter: persistedReducer,
  },
})

const persistor = persistStore(Store)
export {persistor};