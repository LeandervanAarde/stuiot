import React from 'react';
import styles from "./Home.module.scss";
import NavigationPanel from "../../components/Navigation/Navigation.components"

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
            <NavigationPanel/>
            </div>

        </div>
    );
};

export default Home;