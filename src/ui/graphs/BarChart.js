import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions from localStorage
  useEffect(() => {
    // Retrieve logged-in user
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "null");

    if (loggedInUser && loggedInUser.username) {
        // Retrieve all financial data
        const savedTransactions = localStorage.getItem("financialData");
        if (savedTransactions) {
            const parsedData = JSON.parse(savedTransactions);

            // Get transactions for the logged-in user
            const userTransactions = parsedData[loggedInUser.username] || [];
            setTransactions(userTransactions);
        }
    } else {
        console.log("No user is logged in.");
        setTransactions([]);
    }
}, []);

  // Calculate total income and expense
  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach((transaction) => {
    if (transaction.type === 'income') {
      totalIncome += transaction.amount;
    } else if (transaction.type === 'expense') {
      totalExpense += transaction.amount;
    }
  });

  const chartData = {
    labels: ['Income', 'Expenses'], // X-axis labels
    datasets: [
      {
        label: 'Amount',
        data: [totalIncome, totalExpense], // Data for income and expense
        backgroundColor: ['#12B76A', '#FF0000'], // Colors for income and expense
        borderColor: ['#12B76A', '#FF0000'],
        borderWidth: 1,
        borderRadius: 5,
        barThickness: 60,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        display: true,
        beginAtZero: true,
        grid: {
          display: true,
        },
        ticks: {
          display: true,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 14,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="chart-container" style={{ height: '300px', width: '100%' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
