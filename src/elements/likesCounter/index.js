//Core
import React from 'react';
//Styles
import Styles from './styles.module.scss';

export const LikesCounter = ({counts}) =>  <span className={Styles.likesCounter}>{counts}</span>;

