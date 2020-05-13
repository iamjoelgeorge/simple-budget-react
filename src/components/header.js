import React, { useContext } from 'react';
import { TransactionsContext } from '../context/TransactionsContext';

const Header = () => {
  const { transactions } = useContext(TransactionsContext);

  const totalIncome = transactions
    .filter(transaction => transaction.category.toLowerCase() === 'income')
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalExpense = transactions
    .filter(transaction => transaction.category.toLowerCase() === 'expense')
    .reduce((total, transaction) => total + transaction.amount, 0);

  const balance = totalIncome - totalExpense;
  return (
    <>
      <h3 style={{ marginLeft: '15px' }}>Your Balance</h3>
      <p>{balance}</p>
    </>
  );
};

export default Header;
// transactions.reduce((total,transaction) => total + transaction.amount,0)
