import React, { useContext } from 'react';
import { TransactionsContext } from '../context/TransactionsContext';
import ConfirmModal from './ConfirmModal';

const TransactionSummary = ({ transaction }) => {
  const {
    transactions,
    selectedForDeletion,
    isModalOpen,
    toggleModal
  } = useContext(TransactionsContext);
  let confirmModal = null;

  let mutatedTransactions = transactions;

  const onDoubleClick = selectedTransaction => {
    mutatedTransactions.forEach(transaction => {
      if (selectedTransaction.id === transaction.id) {
        transaction.toDelete = true;
      }
    });
    selectedForDeletion(mutatedTransactions);
    toggleModal();
  };
  if (isModalOpen) {
    transactions.forEach(transaction => {
      if (transaction.toDelete) {
        confirmModal = <ConfirmModal transactionToDelete={transaction} />;
      }
    });
  }

  return (
    <>
      <li onDoubleClick={onDoubleClick.bind(this, transaction)}>
        {transaction.description} <span>INR {transaction.amount}</span>
      </li>
      {confirmModal}
    </>
  );
};

export default TransactionSummary;
