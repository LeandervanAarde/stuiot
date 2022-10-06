import React, { useState } from 'react';
import styles from "./Home.module.scss";
import NavigationPanel from "../../components/Navigation/Navigation.components"
import RightNavigation from "../../components/RightNavigation/RightNavigation.component"
import GraphContainer from '../../components/GraphContainer/GraphContainer.component';
import BigButton from '../../components/BigButton/BigButton.component';

import fanicon from "../../assets/fanicon.svg"
import lightsicon from '../../assets/lightsicon.svg';

const Home = () => {
    const [checked, setChecked] = useState(false)
    const [fanChecked, setFanChecked] = useState(false)
    const toggle = (e) =>{
        console.log(e.checked)
        setChecked(!checked)
    }

    const toggleFan = (e) =>{
        console.log(e.checked)
        setFanChecked(!fanChecked)
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <NavigationPanel />
            </div>
            <div className={styles.centerContainer}>
                <GraphContainer />
                <div className={styles.buttonContainer}>
                    <BigButton icon={fanicon} text={"Turn on Fan"} checked={checked}  onClick={toggle}/>
                    <BigButton icon={lightsicon} text={"Turn on Lights"} checked={fanChecked} onClick={toggleFan} />
                </div>
            </div>
            <RightNavigation />
        </div>
    );
};

export default Home;