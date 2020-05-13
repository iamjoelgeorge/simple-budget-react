import React, { createContext, useReducer } from 'react';
import TransactionReducer from './TransactionReducer';

const initialState = {
  transactions: []
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

  return (
    <TransactionsContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
