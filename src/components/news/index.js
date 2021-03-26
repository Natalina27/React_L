//Core
import React from 'react';
//Component
import { Article } from '../article';
//Styles
import Styles from './styles.module.scss';


export const News = ({source}) => {
    const articleJSX = source.map(({id, ...props }) => <Article key={id} {...props}/> );

    return (
        <section className={Styles.news}>
            { articleJSX }
        </section>
    );
};