import React, { useEffect, useState } from "react";
import axios from 'axios';
import LightsIOT from '../../Routes/LightsIOT/LightsIOT.route';
import styles from "./Lights.module.scss"
import AvailableColors from "../AvailableColors/AvailableColors.component";
import Button from '@mui/material/Button';
import GraphContainer from "../GraphContainer/GraphContainer.component";
import DoughnutChart from "../DoughnutChart/DoughnutChart.component";

var led = false
const name = "LeandervanAarde"
const defaultFormValues = {
    Red: 0,
    Green: 0,
    Blue: 0,
    Alpha: 0
}
const Lights = () => {
    const [values, setValues] = useState(defaultFormValues)
    const { Red, Green, Blue, Alpha } = values
    const [on, setOn] = useState(true)
    const [timeOn, setTimeOn] = useState()
    const [timeOff, setTimeOff] = useState()

    const newColours = [
        { color: 'red', red: 255, green: 0, blue: 0, alpha: 1 },
        { color: 'yellow', red: 255, green: 150, blue: 0, alpha: 1 },
        { color: 'green', red: 0, green: 255, blue: 0, alpha: 1 },
        { color: 'cyan', red: 0, green: 255, blue: 255, alpha: 1 },
        { color: 'purple', red: 136, green: 0, blue: 227, alpha: 1 }
    ]

    useEffect(() => {

        let payload = {
            name: "LeandervanAarde",
            state: true,
            // color: {type: String, default: "RED"},
            red:  255,
            green: 0,
            blue: 0,
        }
        axios.post(`http://localhost/api/addLed/${name}`, payload)
                .then(res => {
                    console.log(res.data)
                    // setOn(res.data.state)
                    // console.log
                })
                .catch(err => {
                    console.log(err)
                })


        axios.get(`http://localhost/api/getLed/${name}`)
            .then(res => {
                console.log(res.data)
                // setOn(res.data.state)
                // console.log
                setTimeOn(Math.floor(res.data.timeOn / 60))
                setTimeOff(Math.floor(timeOn) - 1440)
            })
            .catch(err => {
                console.log(err)
            })
    }, [on, values])

    const changeState = () => {
        setOn(prev => !prev)
        led = !led
        // console.log('change', !on)
        let payload = {
            state: !on,
        }

        axios.patch(`http://localhost:80/api/setLed/${name}`, payload)
            .then(res => {
                console.log(res.data)
                // setOn(res.data.led)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues({ ...values, [name]: value })
    }

    console.log(values)

    const changeColour = (e) => {

        let payload = {
            red: values.Red,
            green: values.Green,
            blue: values.Blue,
            alpha: 1
        }

        // console.log(payload)
        axios.patch(`http://localhost:80/api/setLed/` + name, payload)
            .then(res => {
                console.log(res.data)

                // setOn(res.data.led)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const selectPreSet = (e) => {

        let colors = e.currentTarget.style.backgroundColor
        let rgb = colors.substring(4, colors.length - 1)
            .replace(/ /g, '')
            .split(',');

        let selected = {
            red: +rgb[0],
            green: +rgb[1],
            blue: +rgb[2]
        }

        let payload = {
            state: true,
            red: selected.red,
            green: selected.green,
            blue: selected.blue,
            alpha: 1
        }
        axios.patch('http://localhost:80/api/setLed/' + name, payload)
            .then(res => {
                console.log(res.data)
                // setOn(res.data.led)
            })
            .catch(err => {
                console.log(err)
            })

        console.log(selected)
    }


 


    return (
        <div className={styles.container}>
            <div className={styles.container__left}>
            <GraphContainer
                        id={styles.resize}
                        children={
                            <DoughnutChart
                                labels={["TimeOn Today", "Time Off today"]}
                                data={[timeOn, timeOff]}
                                item={"STUdio lights"}
                            />
                        }
                    />
            </div>

            <div className={styles.container__right}>
                <div className={styles.container__right__circleContainer}>
                    <div className={styles.container__right__circleContainer__circle} style={{ backgroundColor: `rgba(${values.Red}, ${values.Green}, ${values.Blue}, ${1})` }} ></div>
                    <Button variant="contained" style={{ backgroundColor: '#23257A' }} onClick={changeColour}>Select Colour</Button>
                </div>

                <div className={styles.container__right__inputs}>
                    <label for="Red">Red</label>
                    <input
                        id="typeinp"
                        type="range"
                        min="0" max="255"
                        name={"Red"}
                        value={Red}
                        onChange={handleChange}
                        step="1" />
                    <label for="Red">Green</label>
                    <input
                        id="typeinp"
                        type="range"
                        min="0" max="255"
                        name={"Green"}
                        value={Green}
                        onChange={handleChange}
                        step="1" />
                    <label for="Red">Blue</label>
                    <input
                        id="typeinp"
                        type="range"
                        min="0" max="255"
                        name={"Blue"}
                        value={Blue}
                        onChange={handleChange}
                        step="1" />
                </div>
                <p>Choose one of our preset Colours</p>
                <div className={styles.container__right__colours}>

                    {
                        newColours.map((i) => (
                            <AvailableColors
                                id={i.color}
                                red={i.red}
                                green={i.green}
                                blue={i.blue}
                                alpha={1}
                                handler={selectPreSet}
                            />
                        ))
                    }
                </div>

                <div className={styles.container__right__buttons}>
                    <Button variant="contained" style={{ backgroundColor: '#23257A' }} onClick={changeState}> Turn lights {on ? " Off" : " On"}</Button>
                </div>
            </div>
        </div>
    );
};
export default Lights;