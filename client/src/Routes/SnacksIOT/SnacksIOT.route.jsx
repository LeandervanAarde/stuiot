import React from 'react';
import styles from "./SnacksIOT.module.scss";
// import SnacksIOTChart from './SnacksIOTLinechart';
import RightNavigation from '../../components/RightNavigation/RightNavigation.component';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Switch, Grid, Button } from '@mui/material';

// 091113 div container color
const SnacksIOT = () => {
    return (
        <div style={{ height: "100px" }}>


            <div className='controls' style={{ display: 'grid', gridTemplateColumns: '20px 50px 50px', alignItems: 'center' }}>
                {/* <p>Daily</p>
                <Switch color="default" />
                <p>Hourly</p> */}

            </div>




        </div >
    );
};

export default SnacksIOT;