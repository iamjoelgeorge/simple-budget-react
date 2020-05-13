import React from 'react';

const TransactionSummary = ({ transaction }) => {
  return (
    <li>
      {transaction.description} <span>INR {transaction.amount}</span>
    </li>
  );
};

export default TransactionSummary;
