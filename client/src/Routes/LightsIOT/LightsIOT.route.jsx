// import React from 'react';
// import GraphContainer from '../../components/GraphContainer/GraphContainer.component';
// import PolarRadar from '../../components/PolarAreaChart/PolarArea.component';
// import RightNavigation from '../../components/RightNavigation/RightNavigation.component';
// import NavigationPanel from '../../components/Navigation/Navigation.components';
// import styles from "./LightsIOT.module.scss";
// import { Switch, Grid } from '@mui/material';
// import AvailableColors from '../../components/AvailableColors/AvailableColors.component';
// import DoughnutChart from '../../components/DoughnutChart/DoughnutChart.component';

// const LightsIOT = () => {

//     const testerData = [
//         {
//             name: "hey1",
//             data: 10
//         },
//         {
//             name: "hey1",
//             data: 12
//         },
//         {
//             name: "hey1",
//             data: 15
//         },
//         {
//             name: "hey1",
//             data: 6
//         }
//     ]

//     return (
//         <div className={styles.container}>
//             <div className={styles.centerContainer}>
//                 <div className={styles.graphHolder}>
//                     <GraphContainer
//                         id={styles.resize}
//                         children={
//                             <DoughnutChart
//                                 labels={testerData.map(i => i.name)}
//                                 data={testerData.map(i => i.data)}
//                                 item={"STUdio lights"}
//                             />
//                         }
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LightsIOT;