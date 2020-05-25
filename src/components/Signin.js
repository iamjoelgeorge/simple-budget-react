import React, { useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { AuthContext } from '../context/AuthContext';

const SignIn = props => {
  const { users, validateUser } = useContext(AuthContext);

  return (
    <div className='signin_signup_form'>
      <h1>Sign In</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, setSubmitting) => {
          let isAuthenticated;
          users.forEach(user => {
            if (
              values.email === user.email &&
              values.password === user.password
            ) {
              isAuthenticated = true;
              validateUser(isAuthenticated);
              props.history.push('/simple-budget-react/dashboard/');
            } else {
              isAuthenticated = false;
              validateUser(isAuthenticated);
              alert('Please enter valid credentials');
            }
          });
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required('Email id is Required'),
          password: Yup.string().required('Please enter your password')
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit
          } = props;

          return (
            <form onSubmit={handleSubmit}>
              <div className='form-control'>
                <input
                  name='email'
                  type='email'
                  placeholder='Email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email && 'error'}
                />
                {errors.email && touched.email && <small>{errors.email}</small>}
              </div>
              <div className='form-control'>
                <input
                  name='password'
                  type='password'
                  placeholder='Password'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.password && touched.password && 'error'}
                />
                {errors.password && touched.password && (
                  <small>{errors.password}</small>
                )}
              </div>

              <button type='submit'>Sign In</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignIn;
