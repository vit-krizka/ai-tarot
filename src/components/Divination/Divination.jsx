import { useState } from 'react';

import Deck from './../Deck/Deck';
import DivinationButton from './../DivinationButton/DivinationButton';
import DivinationQuestion from './../DivinationQuestion/DivinationQuestion';
import DivinationPopup from './../DivinationPopup/DivinationPopup';
import WarningPopup from './../WarningPopup/WarningPopup';

import cardsData from '../../data/cards.json';

function Divination() {
    const [question, setQuestion] = useState('');
    const [cards, setCards] = useState([null, null, null]);
    const [activePopup, setActivePopup] = useState(null); // Stavová proměnná pro aktivní popup

    const replaceCard = (index) => {
        const newCards = [...cards];
        if (newCards[index] == null) {
            const availableCards = cardsData.filter(cardData => !newCards.some(card => card && card.id === cardData.id));
            const newCard = availableCards[Math.floor(Math.random() * 20)];
            // const newCard = availableCards[Math.floor(Math.random() * availableCards.length)];
            newCards[index] = newCard;
        } else {
            newCards[index] = null;
        }
        setCards(newCards);
    };

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    };

    const closePopup = () => {
        setActivePopup(null);
    };

    const divinate = () => {
        const divination = {
            question,
            cards
        };

        if (cards.some(card => card == null)) {
            setActivePopup('warning');
        } else {
            setActivePopup('divination');
        }
    };

    return (
        <>
            <Deck cards={cards} onCardClick={replaceCard} />
            <DivinationQuestion question={question} onQuestionChange={handleQuestionChange} />
            <DivinationButton onClick={divinate} />

            {/* <InfoPanel>
                <p>Připraven na věštbu?</p>
            </InfoPanel> */}

            {/* Podmíněné renderování různých popupů na základě activePopup */}
            {activePopup === 'divination' && <DivinationPopup cards={cards} question={question} onClose={closePopup} />}
            {activePopup === 'warning' && <WarningPopup onClose={closePopup} />}
        </>
    )
}

export default Divination;
