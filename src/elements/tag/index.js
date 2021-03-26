//Core
import React from 'react';
//Styles
import Styles from './styles.module.scss';

export const Tag = ({source}) => {
    return(
        <>
            <div>
                <span className={Styles.tag}>{source}</span>
            </div>
        </>


    );
};