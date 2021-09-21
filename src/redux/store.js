 

import {userReducer , descReducer} from "./reduxSlice";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
  user: userReducer,
  desc:descReducer
  

   
});
const preloadState= {
  
    user: null , 
    desc: null,
  } 
const persistConfig = {
  key: "root2",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
  preloadedState:preloadState 

});

export default store;