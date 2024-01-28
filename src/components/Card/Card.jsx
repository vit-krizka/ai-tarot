import './card.scss';
// import cardImage from './../../assets/card-red.png';
import cardImage from './../../assets/card-blue.png';

function Card({ card, onCardClick }) {
    if (card === undefined || card === null) {
        return (
            <div className='card-wrapper'>
                <div className='card' onClick={onCardClick}>
                    <img src={cardImage} />
                </div>
            </div>
        )
    } else {
        return (
            <div className='card-wrapper'>
                <div className='card' onClick={onCardClick}>
                    <img className='card-reverse' src={cardImage} />
                    <img className='card-face' src={`/cards/${card.image}`} />
                    <div className='name'>{card.name}</div>
                </div>
            </div>
        )
    }
}

export default Card;