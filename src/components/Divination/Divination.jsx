import { useState } from 'react';
import Deck from './../Deck/Deck';
// import InfoPanel from './components/InfoPanel/InfoPanel';
import DivinationButton from './../DivinationButton/DivinationButton';
import DivinationQuestion from './../DivinationQuestion/DivinationQuestion';
import cardsData from '../../data/cards.json'

function Divination() {
    const [question, setQuestion] = useState('');
    const [cards, setCards] = useState([null, null, null]);

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

    const divinate = () => {
        const divination = {
            question,
            cards
        };

        if (cards.some(card => card == null)) {
            alert('Je nutné vytáhnout všechny tři karty.');
        } else {
            alert(`Věštba byla úspěšně provedena. První karta byla ${cards[0].name}, druhá karta byla ${cards[1].name} a třetí karta byla ${cards[2].name}.`);
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
        </>
    )
}

export default Divination;
