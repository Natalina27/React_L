//Core
import React from 'react';
//Component
import { Article } from '../article';
//Styles
import Styles from './styles.module.scss';
import PropTypes from "prop-types";



export const News = ({source}) => {
    const articleJSX = source.map(({id, ...props }) => <Article key={id} {...props}/> );

    return (
        <section className={Styles.news}>
            { articleJSX }
        </section>
    );
};

News.propTypes = {
    source: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            published: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            comments: PropTypes.number.isRequired,
            image: PropTypes.string,
            tags: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string,
                    title: PropTypes.string
                })
            )
        })
    )
}
