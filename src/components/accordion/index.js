import React, { useState }  from 'react';
import Styles from './styles.module.scss';
import { AccordionItem } from '../accordionItem';


export const Accordion = ({db}) => {

    const [state, setState] = useState(db);

    const selectItemHandler = (id) => {
        const newState = state.map(el => (el.id === id) ? {...el, isOpen: !el.isOpen} : {...el,isOpen: false});
        setState(newState);
    };

    const accordionItemJSX = state.map(({id, ...props }) => <AccordionItem key={id}
                                                                           id={id}
                                                                           {...props}
                                                                           selectItemHandler={selectItemHandler}
    />);

    return (
        <>
            <section className={Styles.accordion}>
                <h1>Accordion</h1>
                {accordionItemJSX}
            </section>
        </>
    );
}