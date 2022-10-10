import React from 'react';
import styles from "./Timer.module.scss";
import { MdSchedule } from "react-icons/md";


const Timer = () => {
    return (
        <div className={styles.timer}>
                <h5>Timer left on Timer</h5>
                <h2>0:00:00</h2>
                <MdSchedule size={70} color={'white'}/>
        </div>
    );
};

export default Timer;