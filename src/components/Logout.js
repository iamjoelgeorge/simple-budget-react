import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Logout = props => {
  const { userLoggedOut } = useContext(AuthContext);

  const logoutHandler = () => {
    userLoggedOut(false);
    props.history.push('/simple-budget-react/');
  };

  return (
    <button onClick={logoutHandler} className='logout-btn'>
      Logout
    </button>
  );
};

export default Logout;
