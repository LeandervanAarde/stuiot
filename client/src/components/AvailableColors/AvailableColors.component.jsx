import React from 'react';
import styles from './AvailableColors.module.scss'

const AvailableColors = ({color, handler, red, green, blue, alpha,}) => {
    return (
        <div className={styles.colorCircle} id={`${color}`} style={{backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})`}} onClick={handler}>
        </div>
    );
};

export default AvailableColors;


