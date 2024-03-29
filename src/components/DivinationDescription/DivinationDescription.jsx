import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

import './divinationDescription.scss';

function DivinationDescription({ name, description, type, image, link, button, tag }) {
    const { auth } = useAuth();

    if (tag === "coming-soon") {
        return (
            <div className='divination-description-wrapper disabled'>
                <div className='divination-description'>
                    <h2 className="name">{name}</h2>
                    <div className="type"><strong>Druh věštby:</strong> {type}</div>
                    <div className="description"><strong>Popis:</strong> {description}</div>
                    <img className="image" src={image} alt="rozložení karet pro danou věštbu" />
                    <button className="button">{button}</button>
                    <div className="tag">Připravujeme</div>
                </div>
            </div>
        )
    }

    if (tag === "only-login" && !auth) {
        return (
            <div className='divination-description-wrapper'>
                <div className='divination-description'>
                    <h2 className="name">{name}</h2>
                    <div className="type"><strong>Druh věštby:</strong> {type}</div>
                    <div className="description"><strong>Popis:</strong> {description}</div>
                    <img className="image" src={image} alt="rozložení karet pro danou věštbu" />
                    <Link to='/login'><button className="button">Přihlásit se</button></Link>
                    <div className="tag">Pouze pro přihlášené</div>
                </div>
            </div>
        )
    }

    return (
        <div className='divination-description-wrapper'>
            <div className='divination-description'>
                <h2 className="name">{name}</h2>
                <div className="type"><strong>Druh věštby:</strong> {type}</div>
                <div className="description"><strong>Popis:</strong> {description}</div>
                <img className="image" src={image} alt="rozložení karet pro danou věštbu" />
                <Link to={link}><button className="button">{button}</button></Link>
            </div>
        </div>
    )
}

export default DivinationDescription;