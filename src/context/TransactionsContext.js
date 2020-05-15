import React, { createContext, useReducer } from 'react';
import TransactionReducer from './TransactionReducer';

const initialState = {
  transactions: [],
  isModalOpen: false
};

//context
export const TransactionsContext = createContext(initialState);

// provider
export const TransactionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionReducer, initialState);

  //actions
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }
  
  
  function selectedForDeletion(transaction){
    dispatch({
      type: 'TO_DELETE',
      payload: transaction
    })
  }
  
  function deleteTransaction(updatedTransactions){
    dispatch({
      type: 'DELETE_TRANSACTIONS',
      payload: updatedTransactions
    })
  }
  
  function toggleModal(){
    dispatch({
      type: 'IS_MODAL_OPEN',
    })
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions: state.transactions,
        isModalOpen: state.isModalOpen,
        toggleModal,
        addTransaction,
        deleteTransaction,
        selectedForDeletion
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
