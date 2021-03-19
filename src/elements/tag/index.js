//Core
import React from 'react';
//Styles
import Styles from './styles.module.scss';

export const Tag = ({data}) => {
    return(
        <>
            <div>
                <span className={Styles.tag}>{data}</span>
            </div>
        </>


    );
};