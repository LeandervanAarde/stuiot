
import React from 'react';
import { Line } from "react-chartjs-2";
import { useState, useEffect } from 'react';
import axios from 'axios';


const SnacksIOTChart = () => {
    const [labels, setLabels] = useState([]);
    const [dataVolumeSet, setDataVolumeSet] = useState([]);
    const [dataDispenseSet, setDataDispenseSet] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get('http://localhost/api/getDispenserVolume/')
                .then((res) => {
                    if (!res.data) {
                        alert('Bad request');
                    } else {
                        setLabels([])

                        let dataVolume = []
                        let dataDispense = []
                        let totaldata = res.data.slice(Math.max(res.data.length - 50, 0))

                        for (let i = 0; i < totaldata.length; i++) {
                            const element = totaldata[i];
                            setLabels(labels => [...labels, totaldata[i].time.slice(11, 16)]);
                            dataVolume.push(totaldata[i].volume)
                            dataDispense.push(totaldata[i].doorState)

                        }
                        setDataVolumeSet({
                            label: "Dispenser Volume",
                            data: dataVolume,
                            fill: true,

                            borderColor: "#71FEF2"

                        })
                        setDataDispenseSet({
                            label: "Dispensing Data",
                            data: dataDispense,
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
        datasets: [dataVolumeSet, dataDispenseSet],

    };


    return (
        <div >
            <Line data={data} />
        </div>
    );
}

export default SnacksIOTChart;