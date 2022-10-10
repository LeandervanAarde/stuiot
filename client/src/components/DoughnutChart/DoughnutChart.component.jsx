import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import styles from "./DoughnutChart.module.scss"

const DoughnutChart = ({ labels, data, item }) => {
    return (
        <Doughnut data={{
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

            height={.5} width={.5}

            options={{
                maintainAspectRatio: true,
                animation: {
                    animateRotate: false,
                    animateScale: true,
                    easing: "linear",
                    duration: 2000,

                },
                //    scales: {
                //        r: {
                //            pointLabels: {
                //                display: true,
                //                centerPointLabels: true,
                //                font: {
                //                    size: 20
                //                }
                //            }
                //        }
                //    },

                plugins: {
                    title: {
                        display: true,
                        text: `${item} used setting`,
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
                            display: true,
                            padding: 30,
                            boxWidth: 30,
                            boxHeight: 20,
                        }
                    }

                },

                legend: {
                    font: {
                        size: 18,
                        weight: "bold",
                    }
                },
            }}
        />
    );
};

export default DoughnutChart;