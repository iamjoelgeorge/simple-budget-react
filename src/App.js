import React, { useContext } from 'react';
import './App.css';

import Header from './components/Header';
import IncomeCard from './components/IncomeCard';
import ExpenseCard from './components/ExpenseCard';
import AddTransaction from './components/AddTransaction';
import { TransactionsProvider } from './context/TransactionsContext';
import { AuthProvider } from './context/AuthContext';

import Signup from './components/Signup';
import SignIn from './components/Signin';

function App() {
  return (
    <AuthProvider>
      <TransactionsProvider>
        <div className='container'>
          {/* <Header />
          <div id='summary_cards'>
            <IncomeCard />
            <ExpenseCard />
          </div>
          <AddTransaction /> */}

          {/* <Signup /> */}
          <SignIn />
        </div>
      </TransactionsProvider>
    </AuthProvider>
  );
}

export default App;
