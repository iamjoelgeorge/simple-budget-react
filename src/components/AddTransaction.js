import React, { useState, useContext } from 'react';
import { TransactionsContext } from '../context/TransactionsContext';

const AddTransaction = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('Income');
  const { addTransaction } = useContext(TransactionsContext);

  const updateDescription = e => {
    setDescription(e.target.value);
  };

  const updateAmount = e => {
    setAmount(e.target.value);
  };

  const updateCategory = e => {
    setCategory(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100002),
      description,
      amount: +amount,
      category
    };

    addTransaction(newTransaction);
  };

  return (
    <div className='card'>
      <div className='heading'>
        <h4 style={{ margin: '0' }}>Add a new Transaction</h4>
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
        <div className='category'>
          <select onChange={updateCategory} name='category' id='category'>
            <option value='Income'>Income</option>
            <option value='Expense'>Expense</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddTransaction;
