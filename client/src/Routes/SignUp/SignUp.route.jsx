import React from 'react';
import SignUpContainer from '../../Components/SignUpContainer/SignUpContainer.component';
import styles from "./SignUp.module.scss"
const SignUp = () => {
    return (
        <div className={styles.container}>
                <SignUpContainer/>
        </div>
    );
};

export default SignUp;