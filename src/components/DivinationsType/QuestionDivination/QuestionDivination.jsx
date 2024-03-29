import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../Header/Header';
import Deck from '../../Deck/Deck';
import DivinationButton from '../../DivinationElements/DivinationButton/DivinationButton';
import DivinationQuestion from '../../DivinationElements/DivinationQuestion/DivinationQuestion';
import WarningPopup from '../../WarningPopup/WarningPopup';

import cardsData from '../../../data/cards';

import './questionDivination.scss';

function QuestionDivination() {
    const [question, setQuestion] = useState('');
    const [cards, setCards] = useState([null, null, null]);
    const [activePopup, setActivePopup] = useState(null);

    const navigate = useNavigate();

    const savedAnswer = localStorage.getItem('divinationAnswer');
    if (savedAnswer) {
        // TODO: použít sessionStorage
        localStorage.removeItem('divinationAnswer');
    }

    const replaceCard = (index) => {
        const newCards = [...cards];
        if (newCards[index] == null) {
            const availableCards = cardsData.filter(cardData => !newCards.some(card => card && card.id === cardData.id));
            const newCard = availableCards[Math.floor(Math.random() * availableCards.length)];
            newCards[index] = newCard;
        } else {
            newCards[index] = null;
        }
        setCards(newCards);

        if (activePopup === 'warning-cards' || activePopup === 'warning-question-and-cards') {
            setActivePopup(null);
        }
    };

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);

        if (activePopup === 'warning-question' || activePopup === 'warning-question-and-cards') {
            setActivePopup(null);
        }
    };

    const closePopup = () => {
        setActivePopup(null);
    };

    const divinate = async () => {
        let isQuestionEmpty = (question.trim() === '' || question === null);
        let areCardsEmpty = cards.some(card => card == null);

        if (isQuestionEmpty && areCardsEmpty) {
            setActivePopup('warning-question-and-cards');
        } else if (isQuestionEmpty && !areCardsEmpty) {
            setActivePopup('warning-question');
        } else if (areCardsEmpty && !isQuestionEmpty) {
            setActivePopup('warning-cards');
        } else {
            navigate('/question-divination/answer', { state: { question, cards } });
        }
    };

    return (
        <>
            <Header />
            <main className="divination-wrapper">
                <div className="divination">
                    <Deck cards={cards} onCardClick={replaceCard} />
                    <DivinationQuestion question={question} onQuestionChange={handleQuestionChange} />
                    <DivinationButton onClick={divinate} text="Poradit se s věštcem" />

                    {/* Podmíněné renderování různých popupů na základě activePopup */}
                    {activePopup === 'warning-cards' && <WarningPopup onClose={closePopup} text="Musíte zvolit všechny tři karty." />}
                    {activePopup === 'warning-question' && <WarningPopup onClose={closePopup} text="Musíte položit otázku." />}
                    {activePopup === 'warning-question-and-cards' && <WarningPopup onClose={closePopup} text="Musíte položit otázku a zvolit všechny tři karty." />}
                </div>
            </main>
        </>
    )
}

export default QuestionDivination;