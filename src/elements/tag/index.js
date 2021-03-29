//Core
import React from 'react';
//Styles
import Styles from './styles.module.scss';
import * as PropTypes from 'prop-types';

export const Tag = ({source}) => {
    return(
        <>
            <div>
                <span className={Styles.tag}>{source}</span>
            </div>
        </>


    );
};

Tag.propTypes = {
    source: PropTypes.string.isRequired,
};