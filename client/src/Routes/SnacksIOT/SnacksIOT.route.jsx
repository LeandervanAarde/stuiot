import React from 'react';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import '../../main scss/mainPage.scss';
const SnacksIOT = () => {
    const [dispensingState, setDispensingState] = useState(false)
    useEffect(() => {
        const interval = setInterval(() => {
            axios.get('http://localhost/api/getDispenserState/')
                .then((res) => {

                })
        })
    })


    return (
        <>
            <Button variant="contained" style={{ backgroundColor: '#23257A' }}>Dispense</Button>
            <div className='dispensing'>
                <p style={{ color: '#ffff' }}>Dispensing: </p>
                <ReportProblemOutlinedIcon />
            </div>
        </>
    );
}

export default SnacksIOT;