import React, { useContext, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { TransactionsContext } from '../context/TransactionsContext';

const Chart = () => {
  const { totalIncome, totalExpenses } = useContext(TransactionsContext);

  const chartData = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        data: [totalIncome, totalExpenses],
        backgroundColor: ['darkseagreen', '#e4615a'],
        borderColor: 'transparent'
      }
    ]
  };

  return (
    <div className='chart'>
      <Doughnut
        data={chartData}
        // width={200}
        // height={50}
        options={{ cutoutPercentage: 80, animation: { animateScale: true } }}
      />
    </div>
  );
};

export default Chart;
