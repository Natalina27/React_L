//Core
import React from 'react';
//Component
import { Article } from '../article';
//Styles
import Styles from './styles.module.scss';

export const News = () => {
    return (
        <section className={Styles.news}>
            < Article />
            < Article />
            < Article />
        </section>
    );
};