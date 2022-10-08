import React from 'react';
import styles from "./GraphContainer.module.scss"
const GraphContainer = ({children, ...otherProps}) => {
    return (
        <div className={styles.container} {...otherProps}>
            {children}
        </div>
    );
};

export default GraphContainer;