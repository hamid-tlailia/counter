import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
const persistConfig = {
  key: "root",
  storage: sessionStorage,
};
const persistedReducer = persistReducer(persistConfig, counterReducer);
export const Store = configureStore({
  reducer: {
    counter: persistedReducer,
  },
});

const persistor = persistStore(Store);
export { persistor };
