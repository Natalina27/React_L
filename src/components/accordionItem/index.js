import React from 'react';
import Styles from '../accordionItem/styles.module.scss';
import clx from 'classnames';


export const AccordionItem = ({ id, question, answer,isOpen, selectItemHandler}) => {

    const styleJSX = clx(
        {
            [Styles.accordionItem]: true,
            [Styles.selected]: isOpen
        }
    )
    return (
        <>
            <div className={styleJSX} onClick={() => selectItemHandler(id)}>
                <div className={Styles.accordionQuestion} >
                    <span>{question}</span>
                </div>
                <p className={Styles.accordionAnswer}>{answer}</p>
            </div>
        </>
    );
};
