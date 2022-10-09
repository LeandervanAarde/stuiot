import React from 'react';
import styles from './AvailableColors.module.scss'

const AvailableColors = ({color, handler}) => {
    return (
        <div className={styles.colorCircle} id={`${color}`} style={{backgroundColor: `${color}`}} onClick={handler}>
        </div>
    );
};

export default AvailableColors;


