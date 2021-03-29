//Core
import React, { useState } from 'react';

//Component
import { Accordion } from './components/accordion';
import {News} from './components/news';

//DB
import source from './assets/source.json';
import db from './assets/db.json';

export const App = () => {
    const [visibleNews, setVisibleNews] = useState(false);
    const [visibleAccordion, setVisibleAccordion] = useState(false);

    const openNewsHandler = () => setVisibleNews(!visibleNews );
    const openAccordionHandler = () =>  setVisibleAccordion(!visibleAccordion );

    return(
        <>
            { visibleNews  && <News source={source} />}
            { visibleAccordion && <Accordion db={db} />}

            { !visibleAccordion && <button onClick={openNewsHandler}> {visibleNews ? 'Close News' : 'Open News'} </button>}
            { !visibleNews && <button onClick={openAccordionHandler}>{ visibleAccordion ?  'Close Accordion': 'Open Accordion'} </button>}
        </>

    )
}




