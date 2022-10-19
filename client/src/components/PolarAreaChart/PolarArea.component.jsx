import React from 'react';
import 'chart.js/auto';
import { PolarArea } from "react-chartjs-2";
import styles from "./PolarArea.module.scss";

const PolarRadar = ({ labels, data }) => {
    return (
        <PolarArea data={{
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
                scales: {
                    r: {
                        pointLabels: {
                            display: true,
                            centerPointLabels: true,
                            font: {
                                size: 12
                            }
                        }
                    }
                },

                plugins: {
                    legend: {
                        display: false,
                        position: "top",
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

export default PolarRadar;