import React, { useState, useContext } from 'react';
import { TransactionsContext } from '../context/TransactionsContext';
import SubCategories from './SubCategories';

const AddTransaction = ({ toggleTransactionModal }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(0);
  const [category, setCategory] = useState('Income');
  const [subCategory, setSubCategory] = useState('Salary');
  const { addTransaction, expenseSubCategories } = useContext(
    TransactionsContext
  );

  const updateDescription = e => {
    setDescription(e.target.value);
  };

  const updateAmount = e => {
    setAmount(e.target.value);
  };

  const updateCategory = e => {
    setCategory(e.target.value);
    if (e.target.value.toLowerCase().trim() === 'expense') {
      setSubCategory(Object.keys(expenseSubCategories)[0]);
    }
  };

  const updateDate = e => {
    setDate(e.target.value);
  };

  const updateSubCategory = e => {
    setSubCategory(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100002),
      date,
      amount: +amount,
      description,
      category,
      subCategory,
      toDelete: false
    };

    addTransaction(newTransaction);
    toggleTransactionModal();
  };

  const closeModal = () => {
    toggleTransactionModal();
  };

  const subCategories = (
    <SubCategories
      category={category}
      subCategory={subCategory}
      updateSubCategory={updateSubCategory}
    />
  );

  return (
    <div className='card add-transaction-container'>
      <div className='overlay'></div>
      <div className='add-transaction-card'>
        <div className='heading'>
          <h4 style={{ margin: '0' }}>Add a new Transaction</h4>
          <div className='close-btn' onClick={closeModal}>
            X
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <input
            value={description}
            onChange={updateDescription}
            type='text'
            name='description'
            id='description'
            placeholder='Description'
            required
          />
          <input
            value={amount}
            onChange={updateAmount}
            type='number'
            name='amount'
            id='amount'
            required
          />

          <input
            value={date}
            onChange={updateDate}
            type='date'
            id='date'
            required
          />

          <div className='category'>
            <select onChange={updateCategory} name='category' id='category'>
              <option value='Income'>Income</option>
              <option value='Expense'>Expense</option>
            </select>
          </div>
          <div className='sub-category'>{subCategories}</div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
