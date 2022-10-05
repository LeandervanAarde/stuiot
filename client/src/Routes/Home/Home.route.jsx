import React from 'react';
import styles from "./Home.module.scss";
import NavigationPanel from "../../components/Navigation/Navigation.components"
import RightNavigation from "../../components/RightNavigation/RightNavigation.component"

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
            <NavigationPanel/>
            </div>

            <RightNavigation/>
        </div>
    );
};

export default Home;