import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = ({ name, data }) => {
    return (
        <Line data={{
            labels: name,
            datasets: [{
                data: data,
                backgroundColor: [
                    " #51B2C7",
                    "#423EF8",
                    "#920202"
                ],
            }],
        }}
            height={98}
            options={{
                line:{
                    color: "white"
                },
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    decimation: {
                        enabled: true,
                    },
                    title: {
                        display: true,
                        text: "Item usage",
                        position: "top",
                        color: "white",
                        font: {
                            size: 24,
                            weight: "bold",

                        }
                    },
                    legend: {
                        position: "bottom",
                        display: false,
                        labels: {
                            display: false,
                            padding: 30,
                            boxWidth: 30,
                            boxHeight: 20,
                        }
                    }
                },
            indexAxis: 'y',

                animation: {
                    easing: 'easeInOutBounce',
                    duration: 1800,
                    numSteps: 2,
                },
            }}
        />
    );
};

export default LineChart;