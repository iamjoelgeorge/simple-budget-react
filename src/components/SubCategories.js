import React, { useContext } from 'react';
import { TransactionsContext } from '../context/TransactionsContext';

const SubCategories = ({ category, subCategory, updateSubCategory }) => {
  const { incomeSubCategories, expenseSubCategories } = useContext(
    TransactionsContext
  );

  let subCategoryOptions = null;

  if (category.toLowerCase().trim() === 'income') {
    subCategoryOptions = Object.keys(incomeSubCategories).map(
      (subCategory, index) => {
        return (
          <option key={subCategory + index} value={subCategory}>
            {subCategory}
          </option>
        );
      }
    );
  } else {
    subCategoryOptions = Object.keys(expenseSubCategories).map(
      (subCategory, index) => {
        return (
          <option key={subCategory + index} value={subCategory}>
            {subCategory}
          </option>
        );
      }
    );
  }

  return (
    <select
      value={subCategory}
      onChange={updateSubCategory}
      name='category'
      id='sub-category'
    >
      {subCategoryOptions}
    </select>
  );
};

export default SubCategories;
