import React, { useContext } from 'react';
import { TransactionsContext } from '../context/TransactionsContext';
import TransactionSummary from './Transaction';

const ExpenseCard = () => {
  const { transactions } = useContext(TransactionsContext);
  const expenseArray = transactions.filter(
    transaction => transaction.category.toLowerCase() === 'expense'
  );

  const expenses = expenseArray.map(transaction => (
    <TransactionSummary transaction={transaction} key={transaction.id} />
  ));

  const totalExpense = expenseArray.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );

  return (
    <div className='card'>
      <div className='heading'>
        <h4>Expense</h4>
        <p>INR {totalExpense}</p>
      </div>
      {expenses}
    </div>
  );
};

export default ExpenseCard;
