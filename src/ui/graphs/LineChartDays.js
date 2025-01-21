import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, annotationPlugin);

const LineChart = () => {
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

  const data = {
    labels: ['Income', 'Expenses'], // X-axis labels
    datasets: [
      {
        label: 'Income',
        data: [totalIncome, 0], // Only Income value
        fill: true,
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: '#04BFDA',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 4,
      },
      {
        label: 'Expenses',
        data: [0, totalExpense], // Only Expense value
        fill: false,
        backgroundColor: 'rgba(220, 38, 38, 0.2)',
        borderColor: '#D8D8D8',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  };

  // Find maximum value for annotation
  const maxValue = Math.max(totalIncome, totalExpense);
  const maxLabel = totalIncome > totalExpense ? 'Income' : 'Expenses';

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          padding: 10,
        },
      },
      y: {
        display: true,
        beginAtZero: true,
        grid: {
          display: true,
        },
        ticks: {
          padding: 10,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      annotation: {
        annotations: {
          maxLine: {
            type: 'line',
            xMin: maxLabel,
            xMax: maxLabel,
            borderColor: '#FFA84A',
            borderWidth: 2,
            label: {
              content: `Max: ${maxValue}`,
              enabled: true,
              position: 'start',
              yAdjust: -10,
            },
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="w-[99%] max-w-4xl" style={{ height: '300px', marginTop: '2rem', paddingLeft: '1rem' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
