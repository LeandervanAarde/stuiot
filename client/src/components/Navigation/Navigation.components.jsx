import React from 'react';
import styles from "./Navigation.module.scss"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import logo from '../../assets/logo2.svg';
import homeicon from '../../assets/homeicon.svg';
import snackicon from '../../assets/snackicon.svg';
import drinksicon from '../../assets/drinksicon.svg';
import fanicon from '../../assets/fanicon.svg';
import lightsicon from '../../assets/lightsicon.svg';
import productivitylockicon from '../../assets/productivityicon.svg';

export function NavigationPanel() {


    return (
        <>
            <div className={styles.navigationpanel}>
                {/* <ButtonGroup className={styles.homebutton}><Button>{HomeRoundedIcon}</Button></ButtonGroup> */}
                <div className={styles.navigationpanel__logo}>
                    <img src={logo} className={styles.navigationpanel__logo__stu}></img>
                </div>
                <div className={styles.navigationpanel__linksgroup} >

                    <Button> <img src={homeicon} activeclassname="active" className={styles.button}></img></Button>
                    <Button><img src={snackicon} activeclassname="active"></img></Button>
                    <Button><img src={drinksicon}></img></Button>
                    <Button><img src={fanicon}></img></Button>
                    <Button><img src={lightsicon}></img></Button>
                    <Button><img src={productivitylockicon}></img></Button>
                </div>

            </div>

        </>
    );
};

export default NavigationPanel;