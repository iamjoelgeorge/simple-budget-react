import React, { createContext, useReducer, useEffect } from 'react';
import TransactionReducer from './TransactionReducer';

let data;

if (localStorage.getItem('transactions')) {
  data = JSON.parse(localStorage.getItem('transactions'));
} else {
  data = [];
}

const initialState = {
  transactions: [...data],
  totalIncome: 0,
  totalExpenses: 0,
  isModalOpen: false,
  incomeSubCategories: { Salary: 0, Others: 0 },
  expenseSubCategories: { Food: 0, Shopping: 0, Grocery: 0, Others: 0 }
};

//context
export const TransactionsContext = createContext(initialState);

// provider
export const TransactionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionReducer, initialState);

  useEffect(() => {
    const data = localStorage.getItem('transactions');
    if (data) {
      initialState.transactions = JSON.parse(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state.transactions));
  });
  //actions
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  function selectedForDeletion(transaction) {
    dispatch({
      type: 'TO_DELETE',
      payload: transaction
    });
  }

  function deleteTransaction(updatedTransactions) {
    dispatch({
      type: 'DELETE_TRANSACTIONS',
      payload: updatedTransactions
    });
  }

  function updateTotalIncomeExpenses(amount) {
    dispatch({
      type: 'TOTAL_INCOME_EXPENSES',
      payload: amount
    });
  }

  function updateIncomeSubCategoriesTotal(subCategories) {
    dispatch({
      type: 'UPDATE_INCOME_SUB_CATEGORIES_TOTAL',
      payload: subCategories
    });
  }
  
  function updateExpenseSubCategoriesTotal(subCategories) {
    dispatch({
      type: 'UPDATE_EXPENSE_SUB_CATEGORIES_TOTAL',
      payload: subCategories
    });
  }

  function toggleModal() {
    dispatch({
      type: 'IS_MODAL_OPEN'
    });
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions: state.transactions,
        isModalOpen: state.isModalOpen,
        incomeSubCategories: state.incomeSubCategories,
        expenseSubCategories: state.expenseSubCategories,
        totalExpenses: state.totalExpenses,
        totalIncome: state.totalIncome,
        updateTotalIncomeExpenses,
        updateExpenseSubCategoriesTotal,
        toggleModal,
        addTransaction,
        deleteTransaction,
        selectedForDeletion,
        updateIncomeSubCategoriesTotal
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
