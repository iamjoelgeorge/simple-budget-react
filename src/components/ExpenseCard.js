import React, { useContext, useEffect } from 'react';
import { TransactionsContext } from '../context/TransactionsContext';

const ExpenseCard = () => {
  const {
    transactions,
    expenseSubCategories,
    totalExpenses,
    updateExpenseSubCategoriesTotal
  } = useContext(TransactionsContext);
  const mutatedSubCategories = { ...expenseSubCategories };
  const subCategoriesArray = Object.keys(mutatedSubCategories);

  //Updating the total amount of the subcategories
  const expensesArray = transactions.filter(
    transaction => transaction.category.toLowerCase().trim() === 'expense'
  );

  subCategoriesArray.forEach(item => {
    const filteredSubCategories = expensesArray.filter(
      transaction =>
        transaction.subCategory.toLowerCase().trim() ===
        item.toLowerCase().trim()
    );
    if (filteredSubCategories.length > 0) {
      mutatedSubCategories[item] = filteredSubCategories.reduce(
        (total, transaction) => total + transaction.amount,
        0
      );
    } else {
      mutatedSubCategories[item] = 0;
    }
  });

  useEffect(() => {
    updateExpenseSubCategoriesTotal(mutatedSubCategories);
  }, [transactions]);
  return (
    <div className='card'>
      <div className='heading'>
        <h5>EXPENSE</h5>
        <p style={{ color: '#f84e4e' }}>INR {totalExpenses}</p>
      </div>
      <div className='content'>
        <div className='content-heading'>
          <p>Category</p>
          <p>Amount</p>
        </div>
        <ul>
          <li>
            Food <span className='amount'>{expenseSubCategories.Food}</span>
          </li>
          <li>
            Shopping{' '}
            <span className='amount'>{expenseSubCategories.Shopping}</span>
          </li>
          <li>
            Grocery{' '}
            <span className='amount'>{expenseSubCategories.Grocery}</span>
          </li>
          <li>
            Others <span className='amount'>{expenseSubCategories.Others}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExpenseCard;
