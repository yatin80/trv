import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function DongueChart() {
    ChartJS.register(ArcElement, Tooltip, Legend);
    // ChartJS.defaults.color = '#fff'; // Set default font color to white
    ChartJS.defaults.font.size = 14; // Set default font size
    const data = {
        labels: ['Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Total Payments',
                data: [5, 25, 10],
                backgroundColor: ['rgba(75, 192, 192, 0.9)', 'rgba(153, 102, 255, 0.9)', 'rgba(255, 159, 64, 0.9)'],
                borderRadius: 5,
                // barThickness: 40
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
        },
        cutout: '68%',
        


    };
    return (
        <div className="w-100 d-flex justify-content-center align-items-center h-100" style={{ maxHeight: '280px' }}>
            <Doughnut data={data} options={options} />
        </div>
    );
}

export default DongueChart;