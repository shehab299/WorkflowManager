import React, { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload };
    case "logout":
      return { ...state, user: null };
    default:
      throw new Error("unknown action");
  }
}

export function AuthProvider({ children }) {
  const [{ user }, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuth context is used outside its provider");
  return context;
}
