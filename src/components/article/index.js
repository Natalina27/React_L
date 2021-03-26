//Core
import React from 'react';
//Components
import { Tag } from '../../elements/tag';
import { CommentCounter } from '../../elements/commentsCounter';
import {LikesCounter} from '../../elements/likesCounter';
//Styles
import Styles from './styles.module.scss';

export const Article = ({image, title, tags, description, published, likes, comments}) => {
    const tagJSX = tags.map(el => <Tag key={el} source={ el.toUpperCase()}/>);

    return (
        <section className={Styles.article}>
            <header>
                <div className={Styles.poster}>
                    <img src={image} alt="article"/>
                </div>
                <div className={Styles.tags}>
                    { tagJSX }
                </div>
            </header>
            <article>
                <h1>{title}</h1>
                 <p> {description}</p>
            </article>
            <footer>
                <span>{published}</span>
                <div className={Styles.controls}>
                   <CommentCounter counts={comments} />
                   <LikesCounter counts={likes} />
                </div>
            </footer>
        </section>
    );
};