import React, { useContext } from 'react';
import './App.css';

import Header from './components/header';
import IncomeCard from './components/IncomeCard';
import ExpenseCard from './components/ExpenseCard';
import AddTransaction from './components/AddTransaction';
import { TransactionsProvider } from './context/TransactionsContext';

function App() {
  return (
    <TransactionsProvider>
      <div className='container'>
        <Header />
        <div id='summary_cards'>
          <IncomeCard />
          <ExpenseCard />
        </div>
        <AddTransaction />
      </div>
    </TransactionsProvider>
  );
}

export default App;
