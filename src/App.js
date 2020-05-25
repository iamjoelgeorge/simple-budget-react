import React from 'react';
import './App.css';

import { TransactionsProvider } from './context/TransactionsContext';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from './components/Signin';
import Dashboard from './components/Dashboard';
import TransactionSummary from './components/TransactionSummary';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TransactionsProvider>
          <div className='container'>
            <Switch>
              <Route exact path='/simple-budget-react/' component={SignIn} />
              <Route exact path='/simple-budget-react/dashboard/' component={Dashboard} />
            </Switch>
          </div>
        </TransactionsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
