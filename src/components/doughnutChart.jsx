"use client"

import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
    const [expense, setExpense] = useState([]);

    useEffect(() => {
        fetchExpenseData();
    }, []); // Only run this effect once when the component mounts

    useEffect(() => {
        // Whenever the expense state changes, fetch new data
        fetchExpenseData();
    }, [expense]); // Run this effect whenever the expense state changes

    const fetchExpenseData = () => {
        axios.get('https://expense-tracker-project-mu.vercel.app/')
            .then((response) => {
                setExpense(response.data);
            })
            .catch((error) => {
                console.error('Error fetching expenses:', error);
            });
    };

    // Calculate total amounts by group
    const calculateTotalByGroup = () => {
        const totals = {
            Transportation: 0,
            Food: 0,
            Shopping: 0,
        };

        // Iterate through expenses and accumulate amounts by group
        expense.forEach((expenseItem) => {
            totals[expenseItem.type] += expenseItem.amount;
        });

        return totals;
    };

    const totalByGroup = calculateTotalByGroup();
    // Create chart data based on total amounts by group
    const data = {
        labels: Object.keys(totalByGroup),
        datasets: [
            {
                label: '# of Votes',
                data: Object.values(totalByGroup),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className='w-96 h-96 border-4 rounded-md m-8'>
            <Doughnut data={data} />
        </div>
    );
};

export default DoughnutChart;

