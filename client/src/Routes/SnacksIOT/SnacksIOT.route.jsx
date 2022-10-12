import React from 'react';
import styles from "./SnacksIOT.module.scss";
import SnacksIOTChart from './SnacksIOTLinechart';
import RightNavigation from '../../components/RightNavigation/RightNavigation.component';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Switch, Grid, Button } from '@mui/material';

// 091113 div container color
const SnacksIOT = () => {
    return (
        <div className={styles.snacks}>

            <div className={styles.snacks__container}>

                <div className={styles.snacks__container__snacksgraph}>
                    {/* Snacks graph here */}
                    <SnacksIOTChart />
                </div>
            </div>
            <div style={{ paddingTop: "32px" }}>
                <RightNavigation />
            </div>



            <div className={styles.snacks__report__container}>



                <div className={styles.snacks__report__container__daily}>

                    <h1 className={styles.snacks__report__container__daily__h1}>Report</h1>
                    <div className={styles.snacks__report__container__daily__controls}>
                        <p>Daily</p>
                        <Switch color="default" />
                        <p>Hourly</p>
                    </div>

                </div>


                <div className={styles.snacks__report__container__daily2}>
                    <h1 className={styles.snacks__report__container__daily2__h2}>Report</h1>
                    <div className={styles.snacks__report__container__daily__controls}>

                        <p >Daily</p> <Switch color="default" /><p>Hourly</p>

                    </div>
                    <Button className={styles.snacks__report__container__dispense} variant="contained" style={{ marginLeft: "730px", width: "150px", marginTop: "-100px", height: "50px", fontFamily: 'MerriweatherSans', fontWeight: "Bold" }}>Dispense</Button>



                </div>

            </div>



        </div >
    );
};

export default SnacksIOT;