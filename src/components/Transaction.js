import React from 'react';

const TransactionSummary = ({ transaction }) => {
  return (
    <ul className='details'>
      <li>
        {transaction.description} <span>INR {transaction.amount}</span>
      </li>
    </ul>
  );
};

export default TransactionSummary;
