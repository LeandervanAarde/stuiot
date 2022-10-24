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

    const [labels, setLabels] = useState([]);
    const [dataTempSet, setDataTempset] = useState([]);
    const [dataHumSet, setDataHumSet] = useState([]);




    useEffect(() => {
        const interval = setInterval(() => {
            axios.get('http://localhost/api/getTemp/')
                .then((res) => {
                    if (!res.data) {
                        alert('Bad request');
                    } else {
                        setLabels([])

                        let tempData = []
                        let humData = []
                        let totaldata = res.data.slice(Math.max(res.data.length - 50, 0))

                        for (let i = 0; i < totaldata.length; i++) {
                            const element = totaldata[i];
                            setLabels(labels => [...labels, totaldata[i].time.slice(11, 16)]);
                            tempData.push(totaldata[i].temp)
                            humData.push(totaldata[i].humidity)

                        }
                        setDataTempset({
                            label: "Temp",
                            data: tempData,
                            fill: true,
                            // " #51B2C7",
                            // "#423EF8",
                            // "#920202"
                            // backgroundColor: "#51B2C7",
                            borderColor: "#71FEF2"
                        })
                        setDataHumSet({
                            label: "Humidity",
                            data: humData,
                            fill: true,
                            // " #51B2C7",
                            // "#423EF8",
                            // "#920202"
                            // backgroundColor: "#51B2C7",
                            borderColor: "#BE76FC"
                        })
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        }, 5000);

    }, [])



    const data = {
        labels: labels,
        datasets: [dataTempSet, dataHumSet]
    };


    return (
        <div >
            <Line data={data} />
        </div>
    );
}

export default FanIOTChart;