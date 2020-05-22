import React, { useState, useContext } from 'react';
import AddTransaction from './AddTransaction';
import { TransactionsContext } from '../context/TransactionsContext';
import Transaction from './Transaction';

const TransactionSummary = () => {
  const { transactions } = useContext(TransactionsContext);
  const [modal, setModal] = useState(false);
  const [category, setCategory] = useState('expense');

  let transactionModal = null;

  const updateCategory = e => {
    setCategory(e.target.value);
  };

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
      <td style={{ textAlign: 'center' }} colSpan='4'>
        No transactions to display
      </td>
    </tr>
  );

  if (transactions.length > 0) {
    const expensesArray = transactions.filter(
      transaction => transaction.category.toLowerCase().trim() === 'expense'
    );

    const incomeArray = transactions.filter(
      transaction => transaction.category.toLowerCase().trim() === 'income'
    );

    if (category.toLowerCase().trim() === 'expense') {
      if (expensesArray.length > 0) {
        transaction = expensesArray.map(transaction => {
          return <Transaction transaction={transaction} key={transaction.id} />;
        });
      }
    } else {
      if (incomeArray.length > 0) {
        transaction = incomeArray.map(transaction => {
          return <Transaction transaction={transaction} key={transaction.id} />;
        });
      }
    }
  }

  return (
    <>
      <div className='transaction-summary'>
        <div className='heading'>
          <h5>TRANSACTIONS</h5>
          <div className="transaction-actions">
            <button
              className='add-transaction-btn'
              onClick={toggleTransactionModal}
            >
              Add Transaction
            </button>
            <select
              name='transaction-summary-category'
              id='transaction-summary-category-dropdown'
              value={category}
              onChange={updateCategory}
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
          <tbody>{transaction}</tbody>
        </table>
      </div>
      {transactionModal}
    </>
  );
};

export default TransactionSummary;
