import React, { useContext } from 'react';
import { TransactionsContext } from '../context/TransactionsContext';

const TransactionSummary = ({ transaction }) => {
  const { transactions, deleteTransaction } = useContext(TransactionsContext);
  const onDoubleClick = transaction => {
    const filteredTransactions = transactions.filter(
      reference => transaction.id !== reference.id
    );
    deleteTransaction(filteredTransactions);
  };
  return (
    <li onDoubleClick={onDoubleClick.bind(this, transaction)}>
      {transaction.description} <span>INR {transaction.amount}</span>
    </li>
  );
};

export default TransactionSummary;
