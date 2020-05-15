import React, { useContext } from 'react';
import { TransactionsContext } from '../context/TransactionsContext';

const ConfirmModal = ({ transactionToDelete }) => {
  const { transactions, deleteTransaction, toggleModal } = useContext(
    TransactionsContext
  );

  const deleteItem = () => {
    if (transactionToDelete.toDelete) {
      const updatedTransactions = transactions.filter(
        transaction => transaction.toDelete !== transactionToDelete.toDelete
      );
      deleteTransaction(updatedTransactions);
      toggleModal();
    }
  };

  const closeModal = () => {
    toggleModal();
  };

  return (
    <div className='modal'>
      <div className='modal-box'>
        <p>Are you sure?</p>
        <div className='modal-box_buttons'>
          <button onClick={deleteItem}>Yes</button>
          <button onClick={closeModal} className='danger'>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
