import React, { useContext } from 'react';
import './App.css';

import { TransactionsProvider } from './context/TransactionsContext';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from './components/Signin';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TransactionsProvider>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={SignIn} />
              <Route exact path='/dashboard' component={Dashboard} />
            </Switch>
          </div>
        </TransactionsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
