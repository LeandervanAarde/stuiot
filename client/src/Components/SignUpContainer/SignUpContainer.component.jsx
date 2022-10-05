import React from 'react';
import styles from "./SignUpContainer.module.scss";
import TextField from '@mui/material/TextField';

const SignUpContainer = () => {
    return (
        <div className={styles.container}>
            <h2>Sign up</h2>
            <div className={styles.inputContainer}>
            <TextField className={styles.input} label="Name and Surname" variant="outlined"/>
            <TextField className={styles.input} label="Email address" variant="outlined"/>
            <TextField className={styles.input} label="Password" variant="outlined"/>
            <TextField className={styles.input} label="Confirm Password" variant="outlined"/>
            </div>
        </div>
    );
};

export default SignUpContainer;