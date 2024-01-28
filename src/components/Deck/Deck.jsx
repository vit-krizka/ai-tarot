import './deck.scss'
import Card from '../Card/Card'

function Deck({ cards, onCardClick }) {
    return (
        <div className='deck-wrapper'>
            <div className='deck'>
                {cards.map((card, index) => (
                    <Card key={index} card={card} onCardClick={() => onCardClick(index)} />
                ))}
            </div>
        </div>
    );
}

export default Deck;