import { useState } from 'react';
import Deck from './../Deck/Deck';
// import InfoPanel from './components/InfoPanel/InfoPanel';
import DivinationButton from './../DivinationButton/DivinationButton';
import DivinationQuestion from './../DivinationQuestion/DivinationQuestion';

function Divination() {
    return (
        <>
            <Deck />
            <DivinationQuestion />
            <DivinationButton />

            {/* <InfoPanel>
        <p>Připraven na věštbu?</p>
      </InfoPanel> */}
        </>
    )
}

export default Divination;
