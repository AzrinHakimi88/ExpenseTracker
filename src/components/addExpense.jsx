"use client"

import axios from 'axios';
import React from 'react';

const AddExpense = () => {
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const type = formData.get('type');
      const amount = formData.get('amount');
      const data = {
        type: type,
        amount: amount
      };
  
      try {
        await axios.post('http://localhost:5555/', data);
        console.log('Expense added successfully');
        // Optionally, you can reset the form here
        event.target.reset();
      } catch (error) {
        console.error('Error adding expense:', error);
        alert('An error occurred while adding expense');
      }
    };
  
    return (
      <div className='flex flex-col items-center w-80 h-auto bg-white shadow-2xl p-6 m-8'>
        <h1 className='font-bold text-xl'>Add Expense</h1>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <label htmlFor="">Type : </label>
          <select className='border-2 border-gray-400 rounded-md m-2' name="type" id="type">
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
            <option value="Shopping">Shopping</option>
          </select>
  
          <label className='mt-6' htmlFor="">Amount : </label>
          <input className='border-2 border-gray-400 rounded-md m-2' type="number" name="amount" id="amount" />
  
          <button type="submit" className='m-2 py-2 bg-green-500 rounded-md'>Add</button>
        </form>
      </div>
    );
};

export default AddExpense;
