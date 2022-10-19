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
            label: 'Off',
        },
        {
            value: 10,
            label: 'Slow',
        },
        {
            value: 30,
            label: 'Medium',
        },
        {
            value: 60,
            label: 'Fast',
        }]

    function valuetext(value) {
        setFanSpeed(value);
        updateFan()
        return `${value}speed`;
    }

    const [checked, setChecked] = useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const [fanSpeed, setFanSpeed] = useState(0);
    const [fanState, setFanState] = useState(true);

    useEffect(() => {
        axios.get('http://localhost/api/getFan/')
            .then((res) => {
                setFanSpeed(res.data.fanSpeed)
                setFanState(res.data.relay)
                setChecked(res.data.relay)
            })
            .catch(function (error) {
                console.log(error);
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
        // console.log("checked");
        setFanState(checked);
        updateFan();
    }, [checked])

    return (
        <div style={{ height: "100px" }}>

            <div className='controls' style={{ display: 'grid', gridTemplateColumns: '20px 50px 50px', alignItems: 'center' }}>
                <p style={{ fontSize: '10px', color: 'white', fontWeight: 'bold' }}>OFF</p>
                <Switch
                    checked={checked}
                    onChange={handleChange} />
                <p style={{ fontSize: '10px', color: 'white', paddingLeft: '8px', fontWeight: 'bold' }}>ON</p>
            </div>


            <Box sx={{ width: 300 }}>
                <Slider
                    aria-label="Custom marks"
                    defaultValue={0}
                    value={fanSpeed}
                    getAriaValueText={valuetext}
                    step={1}
                    valueLabelDisplay="auto"
                    max={60}
                    marks={marks}
                />
            </Box>
        </div >
    );
};

export default FanIOT;