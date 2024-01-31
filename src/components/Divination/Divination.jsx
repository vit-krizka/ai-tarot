import { useState } from 'react';

import Header from './../Header/Header';
import Deck from './../Deck/Deck';
import DivinationButton from './../DivinationButton/DivinationButton';
import DivinationQuestion from './../DivinationQuestion/DivinationQuestion';
import DivinationPopup from './../DivinationPopup/DivinationPopup';
import WarningPopup from './../WarningPopup/WarningPopup';

import cardsData from '../../data/cards.json';
import gptService from '../../services/gptService';

function Divination() {
    const [question, setQuestion] = useState('');
    const [cards, setCards] = useState([null, null, null]);
    const [answer, setAnswer] = useState(null);
    const [activePopup, setActivePopup] = useState(null);

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

    const divinate = async () => {
        const divination = {
            question,
            cards
        };

        if (cards.some(card => card == null)) {
            setActivePopup('warning');
        } else {
            setActivePopup('divination');

            try {
                const response = await gptService.sendData("Jsi věštec, který odpovídá v tajemných a mystických frázích.", `Z těchto karet a otázky: ${JSON.stringify(divination)} proveď věštbu. První karta znamená minulost, prostřední přítomnost a poslední budoucnost.`);
                setAnswer(response.choices[0].message.content.trim());
            } catch (error) {
                console.error('Chyba při získávání odpovědi od API', error);
            }
        }
    };

    return (
        <>
            <Header />
            <Deck cards={cards} onCardClick={replaceCard} />
            <DivinationQuestion question={question} onQuestionChange={handleQuestionChange} />
            <DivinationButton onClick={divinate} />

            {/* <InfoPanel>
                <p>Připraven na věštbu?</p>
            </InfoPanel> */}

            {/* Podmíněné renderování různých popupů na základě activePopup */}
            {activePopup === 'divination' && <DivinationPopup cards={cards} question={question} onClose={closePopup} answer={answer} />}
            {activePopup === 'warning' && <WarningPopup onClose={closePopup} />}
        </>
    )
}

export default Divination;