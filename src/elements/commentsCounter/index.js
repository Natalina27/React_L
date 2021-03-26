//Core
import React from 'react';
//Styles
import Styles from './styles.module.scss';

export const CommentCounter = ({counts}) =>  <span className={Styles.commentsCounter}>{counts}</span>;
