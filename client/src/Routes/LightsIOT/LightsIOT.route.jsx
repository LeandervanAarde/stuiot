import React from 'react';
import GraphContainer from '../../components/GraphContainer/GraphContainer.component';
import PolarRadar from '../../components/PolarAreaChart/PolarArea.component';
import RightNavigation from '../../components/RightNavigation/RightNavigation.component';
import NavigationPanel from '../../components/Navigation/Navigation.components';
import styles from "./LightsIOT.module.scss";
import { Switch, Grid } from '@mui/material';
import AvailableColors from '../../components/AvailableColors/AvailableColors.component';
import DoughnutChart from '../../components/DoughnutChart/DoughnutChart.component';

const LightsIOT = () => {

    const testerData = [
        {
            name: "hey1",
            data: 10
        },
        {
            name: "hey1",
            data: 12
        },
        {
            name: "hey1",
            data: 15
        },
        {
            name: "hey1",
            data: 6
        }
    ]


    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <NavigationPanel />
            </div>

            <div className={styles.centerContainer}>
                <div className={styles.graphHolder}>
                <GraphContainer
                    id={styles.resize}
                    children={
                        <PolarRadar
                            labels={testerData.map(i => i.name)}
                            data={testerData.map(i => i.data)}
                        />} />

                <GraphContainer
                    id={styles.resize}
                    children={
                        <DoughnutChart
                            labels={testerData.map(i => i.name)}
                            data={testerData.map(i => i.data)}
                            item={"STUdio lights"}
                        />
                    }
                />
                </div>
                <div className={styles.controls}>
                    <div className={styles.right}>
                        <div className={styles.power}>
                            <h2>Lights</h2>
                            <Grid component="label" container alignItems="center" xs={3} className={styles.grid}>
                                <Grid item><h4>ON</h4></Grid>
                                <Grid item >
                                    <Switch color="default" />
                                </Grid>
                                <Grid item><h4>OFF</h4></Grid>
                            </Grid>
                        </div>

                        <div className={styles.power}>
                            <h2>Breathe Effect</h2>
                            <Grid component="label" container alignItems="center" xs={3} className={styles.grid}>
                                <Grid item><h4>ON</h4></Grid>
                                <Grid item >
                                    <Switch color="default" />
                                </Grid>
                                <Grid item><h4>OFF</h4></Grid>
                            </Grid>
                        </div>
                    </div>

                    <div className={styles.left}>
                        <AvailableColors
                            color={'red'}
                        />

                        <AvailableColors
                            color={'blue'}
                        />

                        <AvailableColors
                            color={'purple'}
                        />

                        <AvailableColors
                            color={'green'}
                        />
                    </div>
                </div>
            </div>
            <RightNavigation />
        </div>
    );
};

export default LightsIOT;