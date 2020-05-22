import React, { useContext } from 'react';
import { TransactionsContext } from '../context/TransactionsContext';

const Header = () => {
  const { totalIncome, totalExpenses } = useContext(TransactionsContext);

  // const totalIncome = transactions
  //   .filter(transaction => transaction.category.toLowerCase() === 'income')
  //   .reduce((total, transaction) => total + transaction.amount, 0);

  // const totalExpense = transactions
  //   .filter(transaction => transaction.category.toLowerCase() === 'expense')
  //   .reduce((total, transaction) => total + transaction.amount, 0);

  const balance = totalIncome - totalExpenses;
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  };
  return (
    <div style={style}>
      <h3 style={{ marginLeft: '15px', color: 'white' }}>Your Balance</h3>
      <p style={{ color: 'white', fontSize: '2em' }}>{balance}</p>
    </div>
  );
};

export default Header;
// transactions.reduce((total,transaction) => total + transaction.amount,0)
