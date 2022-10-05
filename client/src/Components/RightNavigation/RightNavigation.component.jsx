import React from 'react';
import styles from "./RightNavigation.module.scss";
import logo from '../../assets/logo2.svg';
import homeicon from '../../assets/homeicon.svg';
import snackicon from '../../assets/snackicon.svg';
import drinksicon from '../../assets/drinksicon.svg';
import fanicon from "../../assets/fanicon.svg"
import lightsicon from '../../assets/lightsicon.svg';
import productivitylockicon from '../../assets/productivityicon.svg';
import RightContainerItems from '../RightContainerItems/RightContainerItems.component';

const RightNavigation = () => {
    const Items = [
        {
            name: "Productivity lock",
            image: productivitylockicon,
            status: "00:00:00"
        },
        {
            name: "Light Status",
            image: lightsicon,
            status: "Off"
        },
        {
            name: "Fan Status",
            image: fanicon,
            status: "Off"
        },
        {
            name: "Last dispensed Snack",
            image: snackicon,
            status: "00:00:00"
        },
        {
            name: "Last dispensed Drink",
            image: snackicon,
            status: "00:00:00"
        },    
    ]

    return (
        <div className={styles.container}>
            {
                Items.map((item) => ( <RightContainerItems image={item.image} name={item.name} status={item.status}/>) )
            }
        </div>
    );
};

export default RightNavigation;