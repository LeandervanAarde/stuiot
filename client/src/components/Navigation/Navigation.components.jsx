import React from 'react';
import styles from "./Navigation.module.scss"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export function NavigationPanel() {
    return (
        <>
            <div className={styles.navigationpanel}>
                <ButtonGroup className={styles.homebutton}><Button>{HomeRoundedIcon}</Button></ButtonGroup>
                <div className={styles.navigationpanellogo}>


                </div>
            </div>

        </>
    );
};

export default NavigationPanel;