import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../Header/Header';
import Deck from '../../Deck/Deck';
import DivinationButton from '../../DivinationElements/DivinationButton/DivinationButton';
import DivinationTypeSelect from '../../DivinationElements/DivinationTypeSelect/DivinationTypeSelect';
import WarningPopup from '../../WarningPopup/WarningPopup';

import cardsData from '../../../data/cards.json';

import './futureDivination.scss';

function FutureDivination() {
    const [divinationType, setDivinationType] = useState('personal');
    const [cards, setCards] = useState([null, null, null]);
    const [activePopup, setActivePopup] = useState(null);

    const navigate = useNavigate();

    const savedAnswer = localStorage.getItem('divinationAnswer');
    if (savedAnswer) {
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

        if (activePopup === 'warning-cards') {
            setActivePopup(null);
        }
    };

    const handleDivinationTypeChange = (type) => {
        setDivinationType(type);
    }

    const closePopup = () => {
        setActivePopup(null);
    };

    const divinate = async () => {
        let areCardsEmpty = cards.some(card => card == null);

        if (areCardsEmpty) {
            setActivePopup('warning-cards');
        } else {
            navigate('/future-divination/answer', { state: { divinationType, cards } });
        }
    };

    return (
        <>
            <Header />
            <main className="divination-wrapper">
                <div className="divination">
                    <Deck cards={cards} onCardClick={replaceCard} />
                    <DivinationTypeSelect onDivinationTypeChange={handleDivinationTypeChange} />
                    <DivinationButton onClick={divinate} />

                    {/* Podmíněné renderování různých popupů na základě activePopup */}
                    {activePopup === 'warning-cards' && <WarningPopup onClose={closePopup} text="Musíte zvolit všechny tři karty." />}
                </div>
            </main>
        </>
    )
}

export default FutureDivination;