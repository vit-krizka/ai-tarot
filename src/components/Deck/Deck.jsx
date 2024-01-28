import './deck.scss'
import Card from '../Card/Card'
import { useState } from 'react'
import cardsData from '../../data/cards.json'

function Deck() {
    const initialCards = [null, null, null];
    const [cards, setCards] = useState(initialCards);

    const replaceCard = (index) => {
        const newCards = [...cards];
        if (newCards[index] == null) {
            const availableCards = cardsData.filter(cardData => !newCards.some(card => card && card.id === cardData.id));
            // const newCard = availableCards[Math.floor(Math.random() * availableCards.length)];
            const newCard = availableCards[Math.floor(Math.random() * 20)];

            newCards[index] = newCard;
        } else {
            newCards[index] = null;
        }
        setCards(newCards);
    }

    return (
        <div className='deck-wrapper'>
            <div className='deck'>
                {cards.map((card, index) => (
                    <Card key={index} card={card} onCardClick={() => replaceCard(index)} />
                ))}
            </div>
        </div>
    );
}

export default Deck;