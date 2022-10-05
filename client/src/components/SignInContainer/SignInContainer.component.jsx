import React from 'react';
import styles from "./SignInContainer.module.scss";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const SignInContainer = ({changeView}) => {
    
    return (
        <div className={styles.container}>
            <h2>Sign up</h2>
            <div className={styles.inputContainer}>
            <TextField className={styles.input} label="Email address" variant="outlined"/>
            <TextField className={styles.input} label="Password" variant="outlined"/>
            </div>
            <Button variant="contained" className={styles.button}>Sign In</Button>
            <p>Don't have an account?</p>
            <Button variant="text" onClick={changeView}>Sign Up</Button>
        </div>
    );
};

export default SignInContainer;