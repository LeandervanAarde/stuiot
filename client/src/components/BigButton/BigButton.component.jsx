import React from 'react';
import styles from "./BigButton.module.scss";
import { Switch } from '@mui/material';

const BigButton = ({icon, text, toggle, checked, ...otherProps}) => {
    return (
        <div className={styles.container}>
                <img src={icon}/>
                <h4>{text}</h4>
                <Switch  defaultChecked color="default" checked={checked} {...otherProps}/>
        </div>
    );
};

export default BigButton;