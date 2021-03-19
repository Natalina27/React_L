//Core
import React from 'react';
//Styles
import Styles from './styles.module.scss';

export const LikesCounter = ({likes}) =>  <span className={Styles.likesCounter}>{likes}</span>;

