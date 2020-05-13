import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: [
    {
      id: 1,
      description: 'Food Outside Home',
      amount: 200,
      category: 'Expense'
    },
    { id: 2, description: 'Book', amount: 20, category: 'Expense' },
    { id: 3, description: 'Movie', amount: 20, category: 'Expense' },
    { id: 4, description: 'Salary', amount: 20000, category: 'Income' },
    { id: 5, description: 'Other', amount: 20000, category: 'Income' }
  ]
};

//context
export const TransactionsContext = createContext(initialState);

// provider
export const TransactionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

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
