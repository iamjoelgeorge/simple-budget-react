import React, { useState, useContext } from 'react';
import AddTransaction from './AddTransaction';
import { TransactionsContext } from '../context/TransactionsContext';
import Transaction from './Transaction';

const TransactionSummary = () => {
  const { transactions } = useContext(TransactionsContext);
  const [modal, setModal] = useState(false);

  let transactionModal = null;

  const toggleTransactionModal = () => {
    setModal(!modal);
  };

  if (modal) {
    transactionModal = (
      <AddTransaction toggleTransactionModal={toggleTransactionModal} />
    );
  }

  let transaction = (
    <tr>
      <td style={{textAlign: "center"}} colSpan="4">No transactions to display</td>
    </tr>
  );

  if (transactions.length > 0) {
    transaction = transactions.map(transaction => {
      return <Transaction transaction={transaction} key={transaction.id} />;
    });
  }

  return (
    <>
      <div className='transaction-summary'>
        <div className='heading'>
          <h5>TRANSACTIONS</h5>
          <div>
            <button
              className='add-transaction-btn'
              onClick={toggleTransactionModal}
            >
              Add Transaction
            </button>
            <select
              name='transaction-summary-category'
              id='transaction-summary-category-dropdown'
            >
              <option value='expense'>Expense</option>
              <option value='income'>Income</option>
            </select>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th style={{ textAlign: 'right' }}>Amount (INR)</th>
              <th>Description</th>
              <th>Category</th>
            </tr>
          </thead>
          {/* <tbody>{transaction}</tbody> */}
          {transaction}
        </table>
      </div>
      {transactionModal}
    </>
  );
};

export default TransactionSummary;
