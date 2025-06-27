import { Chart as ChartJS, BarElement, CategoryScale, Legend, LinearScale, Tooltip } from 'chart.js';
import React from 'react';

import { Bar } from 'react-chartjs-2';

function Barchart() {
    ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Total Payments',
                data: [10, 20, 15, 25, 22],
                backgroundColor: 'rgba(79, 57, 246, 0.9)',
                borderRadius: 5,
                barThickness: 40
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
        },
    };
    return (
        <>
            <Bar data={data} options={options} />
        </>
    );
}

export default Barchart;