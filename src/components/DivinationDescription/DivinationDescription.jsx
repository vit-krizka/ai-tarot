import { Link } from 'react-router-dom';

import './divinationDescription.scss';

function DivinationDescription({ name, description, image, link }) {

    return (
        <div className='divination-description-wrapper'>
            <div className='divination-description'>
                <h2 className="name">{name}</h2>
                <div className="description">{description}</div>
                <img className="image" src={image} alt="rozložení karet pro danou věštbu" />
                <Link to={link}><button className="button">Vyložit karty</button></Link>
            </div>
        </div>
    )

}

export default DivinationDescription;