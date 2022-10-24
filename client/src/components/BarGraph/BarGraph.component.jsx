import React from 'react';
import styles from './BarGraph.module.scss';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';


const BarGraph = ({ labels, data, title }) => {
    return (
        <Bar data={{

            labels: labels,
            datasets: [
                {
                    data: data,
                    backgroundColor: [
                        " #51B2C7",
                        "#423EF8",
                        "#920202"
                    ],
                    borderColor: "transparent",
                }
            ],

        }}
            options={{
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    decimation: {
                        enabled: true,
                    },
                    title: {
                        display: true,
                        text: title,
                        position: "top",
                        color: "white",
                        font: {
                            size: 24,
                            weight: "bold",

                        }
                    },
                    legend: {
                        position: "top",
                        display: false,
                        label: {
                            display: false,
                            padding: 30,
                            boxWidth: 30,
                            boxHeight: 20,
                        }
                    }
                },
                indexAxis: 'y',
                responsive: true,
                animation: {
                    easing: 'easeInOutBounce',
                    duration: 1800,
                    numSteps: 2,
                },
                datasets: {
                    bar: {
                        base: 0,
                        borderWidth: 3,
                        hoverBorderColor: "gray",
                        hoverBorderWidth: 3,
                        borderRadius: 10,
                    }
                }

            }} />
    );
};

export default BarGraph;