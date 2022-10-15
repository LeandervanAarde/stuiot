import React from 'react';
import BubbleChart from '../../components/BubbleChart/BubbleChart';
import GraphContainer from '../../components/GraphContainer/GraphContainer.component';

const DrinksIOT = () => {
    return (
        <div>
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
        </div>
    );
};

export default DrinksIOT;