import { createContext, useReducer } from "react";
import authReducer from "./AuthReducer";
import { useEffect } from "react";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, sender] = useReducer(authReducer, initialState);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <AuthContext.Provider value={{  user:state.user, isFetching:state.isFetching, error:state.error
      , sender }}>
      {children}
    </AuthContext.Provider>
  );
};