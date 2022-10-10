import React from 'react';
import GraphContainer from '../../components/GraphContainer/GraphContainer.component';
import RightNavigation from '../../components/RightNavigation/RightNavigation.component';
import styles from "./ProductivityIOT.module.scss";
import Timer from '../../components/Timer/Timer.component';
import BarGraph from '../../components/BarGraph/BarGraph.component';
import TextField from '@mui/material/TextField';

const ProductivityIOT = () => {
    const testerData = [
        {
            name: "Monday",
            data: 10
        },
        {
            name: "Tuesday",
            data: 12
        },
        {
            name: "Wednesday",
            data: 15
        },
        {
            name: "Thursday",
            data: 6
        },
        {
            name: "Friday",
            data: 33
        },
        {
            name: "Saturday",
            data: 4
        },
        {
            name: "Sunday",
            data: 10
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.centerContainer}>
                <h1>Productivity lock</h1>
                <div className={styles.graphHolder}>
                    <GraphContainer
                        id={styles.resize}
                        children={

                            <BarGraph
                                labels={testerData.map(i => i.name)}
                                data={testerData.map(i => i.data)}
                                title={'time spent away from phone (hrs)'}
                            />}
                    />
                </div>
                <div className={styles.controls}>
                    <div className={styles.right}>
                        <Timer />
                    </div>

                    <div className={styles.left}>
                        <TextField className={styles.input} label="Hours" variant="outlined" />
                        <TextField className={styles.input} label="Minutes" variant="outlined" />
                        <TextField className={styles.input} label="Seconds" variant="outlined"  />
                    </div>
                </div>
            </div>
            <RightNavigation />
        </div>
    );
};

export default ProductivityIOT;