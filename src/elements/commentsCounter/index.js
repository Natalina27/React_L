//Core
import React from 'react';
//Styles
import Styles from './styles.module.scss';
import * as PropTypes from "prop-types";

export const CommentCounter = ({counts}) =>  <span className={Styles.commentsCounter}>{counts}</span>;

CommentCounter.propTypes = {
    counts: PropTypes.number.isRequired,
}
