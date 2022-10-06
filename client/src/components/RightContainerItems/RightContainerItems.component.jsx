import { style } from '@mui/system';
import React from 'react';
import styles from "./RightContainerItems.module.scss"

const RightContainerItems = ({image, name, status}) => {
    return (
        <div className={styles.container}>
            <img src={image} className={style.image} alt={name}/>
            <h4>{name}</h4>
            <h4>{status}</h4>
        </div>
    );
};

export default RightContainerItems;