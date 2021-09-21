import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { Provider } from "react-redux";
 
 
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import store from "./redux/store";
import { AuthContextProvider } from "./ContextApi/UserContaxt/AuthContext";

 

let persistor = persistStore(store);



ReactDOM.render(

    <AuthContextProvider>
      <App />
  
    </AuthContextProvider>
    
     ,
    document.getElementById('root')
  );

// ReactDOM.render(
//   <Provider store={store}>
//   <PersistGate loading={null} persistor={persistor}>
//   <App/>
//   </PersistGate>
// </Provider>,
//   document.getElementById("root")
// );
