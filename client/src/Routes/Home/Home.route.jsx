import React from 'react';
import RightNavigation from '../../Components/RightNavigation/RightNavigation.component';
import styles from "./Home.module.scss"

const Home = () => {
    return (
        <div className={styles.container}>
        

        <RightNavigation/>
        </div>
    );
};

export default Home;