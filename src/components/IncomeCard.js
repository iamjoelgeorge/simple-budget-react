import React, { useContext } from 'react';
import { TransactionsContext } from '../context/TransactionsContext';
import Transaction from './Transaction';

const IncomeCard = () => {
  const { transactions } = useContext(TransactionsContext);
  const incomeArray = transactions.filter(
    transaction => transaction.category.toLowerCase() === 'income'
  );

  const income = incomeArray.map(transaction => (
    <Transaction transaction={transaction} key={transaction.id} />
  ));

  const totalIncome = incomeArray.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );

  return (
    <div className='card'>
      <div className='heading'>
        <h4>Income</h4>
        <p>INR {totalIncome}</p>
      </div>
      {income}
    </div>
  );
};

export default IncomeCard;
