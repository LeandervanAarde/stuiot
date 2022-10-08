import React, { useState } from 'react';
import styles from "./Home.module.scss";
import NavigationPanel from "../../components/Navigation/Navigation.components"
import RightNavigation from "../../components/RightNavigation/RightNavigation.component"
import GraphContainer from '../../components/GraphContainer/GraphContainer.component';
import BigButton from '../../components/BigButton/BigButton.component';

import fanicon from "../../assets/fanicon.svg"
import lightsicon from '../../assets/lightsicon.svg';
import LessUsedComponents from '../../components/LessUsedComponents/LessUsedComponents.component';
import LineChart from '../../components/LineChart/LineChart.component';

const Home = () => {
    const [checked, setChecked] = useState(false)
    const [fanChecked, setFanChecked] = useState(false)
    const toggle = (e) => {
        setChecked(!checked)
    }

    const testerD= [1,2,4,65,23,2]
    const labels = ["Hey", "Hey", "Hey", "Hey", "Hey"]

    const testerData = [
        {
            name: "hey1",
            data: 10
        },
        {
            name: "hey1",
            data: 12
        },
        {
            name: "hey1",
            data: 6
        },
        {
            name: "hey1",
            data: 6
        }
    ]

    const toggleFan = (e) => {

        setFanChecked(!fanChecked)
    }

  const items = [1,2,3,4]

  const placeHolderUser = "The Stu team!"

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <NavigationPanel />
            </div>
            <div className={styles.centerContainer}>
                <h2>Welcome back, {placeHolderUser}</h2>
                <GraphContainer
                    children={<LineChart
                        name={testerData.map(i => i.name)}
                        data = {testerData.map(i => i.data)}
                    />}
                />
                <div className={styles.buttonContainer}>
                    <BigButton icon={fanicon} text={"Turn on Fan"} checked={checked} onClick={toggle} />
                    <BigButton icon={lightsicon} text={"Turn on Lights"} checked={fanChecked} onClick={toggleFan} />
                </div>
                <div className={styles.otherComponents}>
                    {items.map(i => (<LessUsedComponents/>))}
                </div>
            </div>
            <RightNavigation />
        </div>
    );
};

export default Home;