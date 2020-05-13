import React, { createContext, useReducer, useEffect } from 'react';
import AuthReducer from './AuthReducer';

//state
const initialState = {
  users: [
    {
      name: 'test',
      email: 'test@test',
      password: 'password',
      confirmPassword: 'password'
    }
  ],
  isRegistered: false
};

//context
export const AuthContext = createContext(initialState);

//provider
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //actions
  function addUser(newUser) {
    dispatch({
      type: 'NEW_USER',
      payload: newUser
    });
  }

  function validateUser(isRegistered) {
    dispatch({
      type: 'VALIDATE_USER',
      payload: isRegistered
    });
  }

  return (
    <AuthContext.Provider
      value={{
        users: state.users,
        isRegistered: state.isRegistered,
        addUser,
        validateUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
