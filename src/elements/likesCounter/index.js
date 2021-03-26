//Core
import React, {useState} from 'react';
//Styles
import Styles from './styles.module.scss';

export const LikesCounter = ({counts}) => {
    const [likes, setLikes] = useState(counts);

    const changeLikes = () => {
        likes > counts ? setLikes(likes - 1) : setLikes(likes + 1);
    };

    return (
        <span
            className={Styles.likesCounter}
            onClick={changeLikes}
        >{likes}</span>

    )
};


