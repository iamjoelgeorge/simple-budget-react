import React, { useContext, useEffect } from 'react';
import Header from './Header';
import IncomeCard from './IncomeCard';
import ExpenseCard from './ExpenseCard';
import TransactionSummary from './TransactionSummary';
import { TransactionsContext } from '../context/TransactionsContext';
import Chart from './Chart';

const Dashboard = () => {
  const {
    transactions,
    updateTotalIncomeExpenses,
    totalIncome,
    totalExpenses
  } = useContext(TransactionsContext);

  const updateIncomeExpenseAmount = () => {
    const income = transactions
      .filter(transaction => transaction.category.toLowerCase() === 'income')
      .reduce((total, transaction) => total + transaction.amount, 0);

    const expense = transactions
      .filter(transaction => transaction.category.toLowerCase() === 'expense')
      .reduce((total, transaction) => total + transaction.amount, 0);

    const totalAmount = { totalIncome: income, totalExpenses: expense };
    updateTotalIncomeExpenses(totalAmount);
  };

  useEffect(() => {
    updateIncomeExpenseAmount();
  }, [transactions]);

  let chart = null;

  if (totalIncome > 0 || totalExpenses > 0) {
    chart = <Chart />;
  }

  return (
    <>
      <Header />
      <div id='summary_cards'>
        <IncomeCard />
        <ExpenseCard />
      </div>
      <div style={{ maxWidth: '100%' }}>
        <TransactionSummary />
        {chart}
      </div>
    </>
  );
};

export default Dashboard;
