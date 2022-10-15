import React from 'react';
import styles from './BubbleChart.module.scss';
import { Bubble } from 'react-chartjs-2';
import {Chart as ChartJS, LinearScale,PointElement,Tooltip,Legend,} from 'chart.js';
// import faker from 'faker';
import 'chart.js/auto';
// import "../../ScssVariables/Variables.scss";




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
        label: 'Day',
        data: Array.from({ length: 100 }, () => ({
          x: 1,
          y: 2,
          r: 4,
        })),
        // backgroundColor: 'rgba(255, 99, 132, 0.5)', //Default Pink Chart.js color
        backgroundColor: '#51B2C7',
      },
      {
        label: 'Afternoon',
        data: Array.from({ length: 100 }, () => ({
          x: 4,
          y: 1,
          r: 5,
        })),
        // backgroundColor: 'rgba(53, 162, 235, 0.5)', //Default Blue Chart.js color
        backgroundColor: '#423EF8',
      },
      {
        label: 'Night',
        data: Array.from({ length: 100 }, () => ({
          x: 5,
          y: 2,
          r: 10,
        })),
        backgroundColor: '#920202',
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