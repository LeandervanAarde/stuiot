import React from 'react';
import styles from './BubbleGraph.module.scss';
import { Bubble } from 'react-chartjs-2';
import 'chart.js/auto';


const BubbleGraph = ({labels, data}) => {
//Write out function to calculate caffein intake per shot


    return(

        <Bubble data={{

            labels: labels,
            datasets: [
                {
                    data: data,
                    backgroundColor: [
                        " #51B2C7",
                        "#423EF8",
                        "#920202"
                    ],
                    borderColor: "transparent",
                }
            ],

        }}
        height={98}
        options={{
            line:{
                color: "white"
            },
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                decimation: {
                    enabled: true,
                },
                title: {
                    display: true,
                    text: "Item usage",
                    position: "top",
                    color: "white",
                    font: {
                        size: 24,
                        weight: "bold",

                    }
                },
                legend: {
                    position: "bottom",
                    display: false,
                    labels: {
                        display: false,
                        padding: 30,
                        boxWidth: 30,
                        boxHeight: 20,
                    }
                }
            },
        indexAxis: 'y',

            animation: {
                easing: 'easeInOutBounce',
                duration: 1800,
                numSteps: 2,
            },
        }}
    />
);
    
       
        // const ctx = document.getElementById('myChart').getContext('2d');
        // const myChart = new Chart(ctx, {
        //     type: 'bar',
        //     data: {
        //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        //         datasets: [{
        //             label: '# of Votes',
        //             data: [12, 19, 3, 5, 2, 3],
        //             backgroundColor: [
        //                 'rgba(255, 99, 132, 0.2)',
        //                 'rgba(54, 162, 235, 0.2)',
        //                 'rgba(255, 206, 86, 0.2)',
        //                 'rgba(75, 192, 192, 0.2)',
        //                 'rgba(153, 102, 255, 0.2)',
        //                 'rgba(255, 159, 64, 0.2)'
        //             ],
        //             borderColor: [
        //                 'rgba(255, 99, 132, 1)',
        //                 'rgba(54, 162, 235, 1)',
        //                 'rgba(255, 206, 86, 1)',
        //                 'rgba(75, 192, 192, 1)',
        //                 'rgba(153, 102, 255, 1)',
        //                 'rgba(255, 159, 64, 1)'
        //             ],
        //             borderWidth: 1
        //         }]
        //     },
        //     options: {
        //         scales: {
        //             y: {
        //                 beginAtZero: true
        //             }
        //         }
        //     }
        // });
        // </script>
        
    
}
export default BubbleGraph