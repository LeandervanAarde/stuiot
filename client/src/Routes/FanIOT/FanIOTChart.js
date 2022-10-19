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
import { useState, useEffect } from 'react';
import axios from 'axios';






const FanIOTChart = () => {

    const [labels, setLabels] = useState();
    const [datasets, SetDatasets] = useState();


    useEffect(() => {
        axios.get('http://localhost/api/getTemp/')
            .then((res) => {
                if (!res.data) {
                    alert('Bad request');
                } else {
                    console.log(res.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            })

    }, [])

    const data = {
        labels: ["37°C", "37°C", "37°C", "Thursday", "Friday", "Saturday", "Sunday"],
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

export default FanIOTChart;