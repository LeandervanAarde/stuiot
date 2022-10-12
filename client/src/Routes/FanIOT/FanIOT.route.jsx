import React from 'react';
import styles from "./FanIOT.module.scss";
import FanIOTChart from './FanIOTChart';
import RightNavigation from '../../components/RightNavigation/RightNavigation.component';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Switch, Grid, Button } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// 091113 div container color
const FanIOT = () => {
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
                        <p>ON</p>
                        <Switch color="default" />
                        <p>OFF</p>
                    </div>

                </div>


                <div className={styles.snacks__report__container__daily2}>
                    <h1 className={styles.snacks__report__container__daily2__h2}>Speed Level</h1>

                    <FormControl style={{ gridGap: "16px", width: "400px" }}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            style={{ gridGap: "16px" }}>
                            <FormControlLabel value="1" control={<Radio />} label="1" />
                            <FormControlLabel value="2" control={<Radio />} label="2" />
                            <FormControlLabel value="3" control={<Radio />} label="3" />
                            <FormControlLabel value="4" control={<Radio />} label="4" />
                            <FormControlLabel value="5" control={<Radio />} label="5" />
                        </RadioGroup>
                    </FormControl>

                    {/* 
                    <Button className={styles.snacks__report__container__dispense} variant="contained" style={{ marginLeft: "730px", width: "150px", marginTop: "-100px", height: "50px", fontFamily: 'MerriweatherSans', fontWeight: "Bold" }}>Dispense</Button> */}



                </div>

            </div>



        </div >
    );
};

export default FanIOT;