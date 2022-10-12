// const config = {
//     type: 'line',
//     data: data,
// };
// const config = {
//     type: 'line',
//     data: data,
// };

import React from 'react';
import { Line } from "react-chartjs-2";

const SnacksIOTChart = () => {
    const data = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
            {
                label: "First dataset",
                data: [33, 53, 85, 41, 44, 65, 88],
                fill: true,
                // " #51B2C7",
                // "#423EF8",
                // "#920202"
                // backgroundColor: "#51B2C7",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "Second dataset",
                data: [11, 14, 35, 45, 54, 90, 100],
                fill: false,
                borderColor: "#742774"
            },
            {
                label: "Third dataset",
                data: [20, 30, 40, 51, 60, 76, 120],
                fill: false,
                borderColor: "#920202"
            }
        ]
    };


    return (
        <div >
            <Line data={data} />
        </div>
    );
}

export default SnacksIOTChart;