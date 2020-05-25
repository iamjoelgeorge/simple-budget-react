import React, { useContext, useEffect } from 'react';
import { TransactionsContext } from '../context/TransactionsContext';

const IncomeCard = () => {
  const {
    transactions,
    incomeSubCategories,
    updateIncomeSubCategoriesTotal,
    totalIncome
  } = useContext(TransactionsContext);

  const mutatedSubCategories = { ...incomeSubCategories };
  const subCategoriesArray = Object.keys(mutatedSubCategories);

  //Updating the total amount of the subcategories
  const incomeArray = transactions.filter(
    transaction => transaction.category.toLowerCase().trim() === 'income'
  );

  subCategoriesArray.forEach(item => {
    const filteredSubCategories = incomeArray.filter(
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
    updateIncomeSubCategoriesTotal(mutatedSubCategories);
  }, [transactions]);

  return (
    <div className='card'>
      <div className='heading'>
        <h5>INCOME</h5>
        <p style={{ color: '#3fb485' }}>INR {totalIncome}</p>
      </div>
      <div className='content'>
        <div className="content-heading">
          <p>Category</p>
          <p>Amount</p>
        </div>
        <ul>
          <li>
            Salary <span className='amount'>{incomeSubCategories.Salary}</span>
          </li>
          <li>
            Others <span className='amount'>{incomeSubCategories.Others}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IncomeCard;
