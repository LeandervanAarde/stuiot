import React from 'react';
import styles from './BubbleChart.module.scss';
import { Bubble } from 'react-chartjs-2';
import {Chart as ChartJS, LinearScale,PointElement,Tooltip,Legend,} from 'chart.js';
// import faker from 'faker';
import 'chart.js/auto';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

export const data = {
    datasets: [
      {
        label: 'Red dataset',
        data: Array.from({ length: 50 }, () => ({
          x: ({ min: -100, max: 100 }),
          y: ({ min: -100, max: 100 }),
          r: ({ min: 5, max: 20 }),
        })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Blue dataset',
        data: Array.from({ length: 50 }, () => ({
          x: ({ min: -100, max: 100 }),
          y: ({ min: -100, max: 100 }),
          r: ({ min: 5, max: 20 }),
        })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

function BubbleChart() {
    return (
        <Bubble options={options} data={data}/>
    )
}

export default BubbleChart






//Old code
// const BubbleGraph = ({labels, data}) => {
//Write out function to calculate caffein intake per shot


//     return(

//         <Bubble data={{

//             labels: labels,
//             datasets: [
//                 {
//                     data: 12,
//                     backgroundColor: [
//                         " #51B2C7",
//                         "#423EF8",
//                         "#920202"
//                     ],
//                     borderColor: "transparent",
//                 }
//             ],

//         }}
//         height={98}
//         options={{
//             line:{
//                 color: "white"
//             },
//             responsive: true,
//             maintainAspectRatio: true,
//             plugins: {
//                 decimation: {
//                     enabled: true,
//                 },
//                 title: {
//                     display: true,
//                     text: "Item usage",
//                     position: "top",
//                     color: "white",
//                     font: {
//                         size: 24,
//                         weight: "bold",

//                     }
//                 },
//                 legend: {
//                     position: "bottom",
//                     display: false,
//                     labels: {
//                         display: false,
//                         padding: 30,
//                         boxWidth: 30,
//                         boxHeight: 20,
//                     }
//                 }
//             },
//         indexAxis: 'y',

//             animation: {
//                 easing: 'easeInOutBounce',
//                 duration: 1800,
//                 numSteps: 2,
//             },
//         }}
//     />
// );    
// }
// export default BubbleGraph