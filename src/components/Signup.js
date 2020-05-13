import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const Signup = () => {
  const { addUser } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const updateName = e => {
    setName(e.target.value);
  };
  const updateEmail = e => {
    setEmail(e.target.value);
  };
  const updatePassword = e => {
    setPassword(e.target.value);
  };
  const updateConfirmPassword = e => {
    setConfirmPassword(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
      confirmPassword
    };

    addUser(newUser);
  };

  return (
    <div className='signin_signup_form'>
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit}>
        <input
          required
          type='text'
          placeholder='Name'
          value={name}
          onChange={updateName}
        />
        <input
          required
          type='email'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
        <input
          required
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        <input
          required
          type='password'
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={updateConfirmPassword}
        />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
