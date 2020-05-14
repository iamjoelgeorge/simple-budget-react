import React from 'react';
import Header from './Header';
import IncomeCard from './IncomeCard';
import ExpenseCard from './ExpenseCard';
import AddTransaction from './AddTransaction';

const Dashboard = () => {
  return (
    <>
      <Header />
      <div id='summary_cards'>
        <IncomeCard />
        <ExpenseCard />
      </div>
      <AddTransaction />
    </>
  );
};

export default Dashboard;
