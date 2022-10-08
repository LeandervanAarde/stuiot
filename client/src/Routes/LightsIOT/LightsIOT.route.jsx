import React from 'react';
import GraphContainer from '../../components/GraphContainer/GraphContainer.component';
import LineChart from '../../components/LineChart/LineChart.component';
import RightNavigation from '../../components/RightNavigation/RightNavigation.component';
import NavigationPanel from '../../components/Navigation/Navigation.components';
import styles from "./LightsIOT.module.scss";
import { Switch, Grid } from '@mui/material';

const LightsIOT = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <NavigationPanel />
            </div>

            <div className={styles.centerContainer}>
                <GraphContainer
                id={styles.resize}
                // children={<LineChart
                //     name={testerData.map(i => i.name)}
                //     data={testerData.map(i => i.data)}
                // />}
                />
                <div className={styles.controls}>
                    <div className={styles.right}>
                        <div className={styles.power}>
                            <h2>Lights</h2>
                            <Grid component="label" container alignItems="center" xs={3} className={styles.grid}>
                                <Grid item><h4>ON</h4></Grid>
                                <Grid item >
                                    <Switch  color="default" />
                                </Grid>
                                <Grid item><h4>OFF</h4></Grid>
                            </Grid>
                        </div>

                        <div className={styles.power}>
                            <h2>Breathe Effect</h2>
                            <Grid component="label" container alignItems="center" xs={3} className={styles.grid}>
                                <Grid item><h4>ON</h4></Grid>
                                <Grid item >
                                    <Switch  color="default" />
                                </Grid>
                                <Grid item><h4>OFF</h4></Grid>
                            </Grid>
                        </div>
                    </div>

                    <div className={styles.left}>
                        hey
                    </div>
                </div>
            </div>
            <RightNavigation />
        </div>
    );
};

export default LightsIOT;