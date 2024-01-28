import './divinationPopup.scss'
import Card from '../Card/Card'

function DivinationPopup({ cards, question, onClose }) {
    return (
        <div className='divination-popup-wrapper'>
            <div className='divination-popup'>
                <div>VÝSLEDEK VĚŠTBY</div>
                <div className="deck">
                    {cards.map((card, index) => (
                        <Card key={index} card={card} />
                    ))}
                </div>
                <h2 className='question'>{question}</h2>
                <div>Lorem ipsum</div>
                <div className='close' onClick={onClose}>X</div>
            </div>
        </div>
    );
}

export default DivinationPopup;