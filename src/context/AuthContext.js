import React, { createContext, useReducer} from 'react';
import AuthReducer from './AuthReducer';

//state
const initialState = {
  users: [
    {
      name: 'test',
      email: 'a@a.com',
      password: 'pass',
      confirmPassword: 'pass'
    }
  ],
  isAuthenticated: false
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

  function validateUser(isAuthenticated) {
    dispatch({
      type: 'VALIDATE_USER',
      payload: isAuthenticated
    });
  }

  return (
    <AuthContext.Provider
      value={{
        users: state.users,
        isAuthenticated: state.isAuthenticated,
        addUser,
        validateUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
