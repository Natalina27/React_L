//Core
import React from 'react';
//Styles
import Styles from './styles.module.scss';

export const CommentCounter = ({comments}) =>  <span className={Styles.commentsCounter}>{comments}</span>;
