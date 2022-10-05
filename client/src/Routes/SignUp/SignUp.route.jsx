import React, { useEffect, useState } from 'react';
import SignUpContainer from '../../components/SignUpContainer/SignUpContainer.component';
import styles from "./SignUp.module.scss";
import SignInContainer from '../../components/SignInContainer/SignInContainer.component';
const SignUp = () => {
    const [component, setComponent] = useState(false);
    const change = () => {
        setComponent(prev => !prev)
    }
    
    return (
        <div className={styles.container}>
            {
                component 
                ? 
                <SignUpContainer changeView={change}/>
                :
                <SignInContainer changeView={change}/>
            }            
        </div>
    );
};

export default SignUp;