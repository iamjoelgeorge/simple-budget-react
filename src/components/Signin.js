import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const SignIn = () => {
  const { users, validateUser, isRegistered } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const updateEmail = e => {
    setEmail(e.target.value);
  };
  const updatePassword = e => {
    setPassword(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    let isRegistered;
    users.map(user => {
      if (email === user.email && password === user.password) {
        isRegistered = true;
        validateUser(isRegistered);
      } else{
        isRegistered = false;
        validateUser(isRegistered);
      }
    });
  };

  return (
    <div className='signin_signup_form'>
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />

        <button type='submit'>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
