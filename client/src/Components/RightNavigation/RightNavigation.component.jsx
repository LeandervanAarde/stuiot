import React, { useState } from 'react';
import styles from "./RightNavigation.module.scss";
import drinksicon from '../../assets/drinksicon.svg';
import snackicon from '../../assets/snackicon.svg';
import fanicon from "../../assets/fanicon.svg"
import lightsicon from '../../assets/lightsicon.svg';
import productivitylockicon from '../../assets/productivityicon.svg';
import RightContainerItems from '../RightContainerItems/RightContainerItems.component';
import { useEffect } from 'react';
import axios from 'axios'

const LeftDataPanel = () => {
    const name = "LeandervanAarde"

    var totalSeconds = 0;
    // This is the time of dispension
    var dispensedTime = 1665055907;
    const [lightStatus, setLightStatus] = useState(false)

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0);

    useEffect(() => {

        axios.get(`http://localhost/api/getLed/${name}`)
        .then(res => {
            console.log(res.data)
            setLightStatus(res.data.state)
            // console.log
        })
        .catch(err => {
            console.log(err)
        })

        const interval = setInterval(() => {

            let currentTime = Math.floor(Date.now() / 1000);

            totalSeconds++;
            let tempSeconds = currentTime - dispensedTime;

            let hrs = Math.floor(tempSeconds / 3600);
            tempSeconds = tempSeconds - (hrs * 3600);

            let min = Math.floor(tempSeconds / 60);
            tempSeconds = tempSeconds - (min * 60);

            setSeconds(tempSeconds)
            setMinutes(Math.round(min))
            setHours(Math.round(hrs))
        }, 1000);

        return () => clearInterval(interval)

    }, [lightStatus]);


    const Items = [
        {
            name: "Productivity lock",
            image: productivitylockicon,
            status: `00:00:00`
        },
        {
            name: "Light Status",
            image: lightsicon,
            status: lightStatus ? "ON" : "OFF"
        },
        {
            // ek gaan ekstra usestates hier moet insit om dit aan/af te laat gaan. ek voel dis bietjie redundant, want ek wys die status op die main page in my div block...
            name: "Fan Status",
            image: fanicon,
            status: "Off"
        },
        {
            name: "Last dispensed Snack",
            image: snackicon,
            status: `${hours === 0 ? "00" : hours}: ${minutes === 0 ? "00" : minutes < 10 ? `0${minutes}` : minutes}: ${seconds === 0 ? "00" : seconds < 10 ? `0${seconds}` : seconds} `
        },
        {
            name: "Last dispensed Drink",
            image: drinksicon,
            status: `${hours === 0 ? "00" : hours}: ${minutes === 0 ? "00" : minutes < 10 ? `0${minutes}` : minutes}: ${seconds === 0 ? "00" : seconds < 10 ? `0${seconds}` : seconds} `
        },
    ]

    return (
        <div className={styles.container}>
            {
                Items.map((item) => (<RightContainerItems image={item.image} name={item.name} status={item.status} />))
            }
        </div>
    );
};

export default LeftDataPanel;