import React from 'react';
import { Button, linearProgressClasses } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import '../../main scss/mainPage.scss';
const SnacksIOT = () => {
    const [dispensingState, setDispensingState] = useState(true)
    useEffect(() => {
        const interval = setInterval(() => {
            axios.get('http://localhost/api/getDispenserState/')
                .then((res) => {
                    console.log(res.data);
                    setDispensingState(res.data.dispensing)
                })
                .catch(function (error) {
                    console.log(error);
                })
        }, 5000);

    }, [])

    const alertActive = () => {
        setDispensingState(true);

        let payloadData = {
            dispensing: true,
        }

        console.log("loggin");
        axios.patch('http://localhost/api/updateDispenserState/', payloadData).then((res) => {
            if (res) {
                console.log("Dispensed clicked");
            }
        })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <>
            <Button variant="contained" style={{ backgroundColor: '#23257A' }} onClick={() => alertActive()}>Dispense</Button>
            <div className='dispensing'>
                {!dispensingState ? (
                    <div className='dispensing__alert'>
                        < ReportProblemOutlinedIcon />
                    </div>
                ) : (
                    <div className='dispensing__alertactive'>
                        < ReportProblemOutlinedIcon />
                    </div>
                )}
            </div>
        </>
    );
}

export default SnacksIOT;