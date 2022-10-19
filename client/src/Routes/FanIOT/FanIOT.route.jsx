import React from 'react';
import styles from "./FanIOT.module.scss";
import FanIOTChart from './FanIOTChart';
import RightNavigation from '../../components/RightNavigation/RightNavigation.component';
import { Switch, Grid, Button } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
// 091113 div container color
const FanIOT = () => {

    const marks = [
        {
            value: 0,
            label: 'OFF',
        },
        {
            value: 10,
            label: 'SLOW',
        },
        {
            value: 30,
            label: 'MEDIUM',
        },
        {
            value: 60,
            label: 'FAST',
        }]

    function valuetext(value) {
        setFanSpeed(value);
        updateFan()
        return `${value}speed`;
    }

    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const [fanSpeed, setFanSpeed] = useState(0);
    const [fanState, setFanState] = useState(false);

    useEffect(() => {
        axios.get('http://localhost/api/getFan/')
            .then((res) => {
                if (!res.data) {
                    alert('Bad request');
                } else {
                    console.log(res.data);
                    setFanSpeed(res.data.fanSpeed)
                    setFanState(res.data.fanState)
                }
            })
            .catch(function (error) {
                // console.log(error);
            })

    }, [])



    const updateFan = () => {
        let payload = {
            relay: fanState,
            fanSpeed: fanSpeed
        }
        axios.patch('http://localhost/api/updateFan/', payload)
            .then((res) => {
                if (!res.data) {
                    alert('Bad request');
                } else {

                }
            })
            .catch(function (error) {
            })
    }

    useEffect(() => {
        console.log("checked");
        setFanState(checked);
        updateFan();
    }, [checked])

    return (
        <div className={styles.snacks}>
            <div className={styles.snacks__container}>
                <div className={styles.snacks__container__snacksgraph}>
                    {/* Snacks graph here */}
                    <FanIOTChart />
                </div>
            </div>
            <div style={{ paddingTop: "32px" }}>
                <RightNavigation />
            </div>
            <div className={styles.snacks__report__container}>
                <div className={styles.snacks__report__container__daily}>
                    <h1 className={styles.snacks__report__container__daily__h1}>FAN</h1>
                    <div className={styles.snacks__report__container__daily__controls}>
                        <p>OFF</p>
                        <Switch
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        <p>ON</p>
                    </div>
                </div>
                <div className={styles.snacks__report__container__daily2}>
                    <h1 className={styles.snacks__report__container__daily2__h2}>Speed Level</h1>
                    <Box sx={{ width: 500 }}>
                        <Slider
                            aria-label="Custom marks"
                            defaultValue={0}
                            getAriaValueText={valuetext}
                            step={1}
                            valueLabelDisplay="auto"
                            max={60}
                            marks={marks}
                        />
                    </Box>
                </div>
            </div>
        </div >
    );
};

export default FanIOT;