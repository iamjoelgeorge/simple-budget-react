import React, { useContext } from 'react';
import { TransactionsContext } from '../context/TransactionsContext';
import ConfirmModal from './ConfirmModal';

const Transaction = ({ transaction }) => {
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
      <tr onDoubleClick={onDoubleClick.bind(this, transaction)}>
        <td className='date'>{transaction.date}</td>
        <td className='amount'>{transaction.amount}</td>
        <td className='description'>{transaction.description}</td>
        <td className='sub-category'>{transaction.subCategory}</td>
        <td className='overlay'></td>
      </tr>

      {confirmModal}
    </>
  );
};

export default Transaction;
