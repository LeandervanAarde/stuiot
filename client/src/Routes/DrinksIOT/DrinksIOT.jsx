import React from 'react';
import BubbleChart from '../../components/BubbleChart/BubbleChart';
import GraphContainer from '../../components/GraphContainer/GraphContainer.component';
// import RightNavigation from '../../components/RightNavigation/RightNavigation.component';
import styles from '../DrinksIOT/DrinksIOT.module.scss'


const DrinksIOT = () => {
    return (
        <div>
             <div className={styles.container}>
             <div className={styles.centerContainer}>
             <GraphContainer
                        // id={styles.resize}
                        children={
                            <BubbleChart
                                // labels={testerData.map(i => i.name)}
                                // data={testerData.map(i => i.data)}
                                // item={"STUdio lights"}
                            />
                        }
                    />
                    <div className={styles.right}>
                    {/* <RightNavigation /> */}
                          </div>
            </div>
            </div>
        </div>
    );
};

export default DrinksIOT;